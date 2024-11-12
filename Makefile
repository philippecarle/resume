# See https://gazr.io

.PHONY: help init yarn format test run build stop

RESUME=docker compose run --service-ports resume
PRINTER=docker compose run --service-ports printer
JSON_UTILS=docker compose run -d json-utils 
NPM=$(RESUME) npm
YARN=$(RESUME) yarn
THEME ?= actual

help: ## Display help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: stop ## Build image and install npm dependencies
	docker compose build --remove-orphans
	$(YARN) install --force

yarn: stop ## Execute yarn with CMD and ARGS
	$(YARN) $(CMD) $(ARGS)

format: stop ## Format code
	$(YARN) format
	$(JSON_UTILS) sh -c "jq . src/resume.json | sponge src/resume.json"

test: stop ## Run tests
	$(YARN) test

run: stop ## Run the web app
	$(YARN) start

build: stop ## Build static files and print to pdf
	$(YARN) build
	docker compose up --remove-orphans -d nginx
	$(PRINTER) touch /usr/src/app/workspace/resume/resume.pdf
	$(PRINTER) google-chrome --no-sandbox --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf=/usr/src/app/workspace/resume/resume.pdf --virtual-time-budget=25000 http://nginx
	docker compose down --remove-orphans

stop:
	docker compose down --remove-orphans
