# See https://gazr.io

.PHONY: help init yarn format test run build

RESUME=docker compose run --service-ports resume
PRINTER=docker compose run --service-ports printer
PYTHON=docker compose run python python
NPM=$(RESUME) npm
YARN=$(RESUME) yarn
THEME ?= actual

help: ## Display help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Build image and install npm dependencies
	docker compose build --remove-orphans
	$(YARN) install --force

yarn: ## Execute yarn with CMD and ARGS
	$(YARN) $(CMD) $(ARGS)

format: ## Format code
	$(PYTHON) -m json.tool src/resume.json > resume_pretty.json
	mv -f resume_pretty.json src/resume.json
	$(YARN) format

test: ## Run tests
	$(YARN) validate
	$(YARN) test

run: ## Run the web app
	$(YARN) start

build: ## Build static files and print to pdf
	$(YARN) build
	docker compose up -d nginx
	$(PRINTER) touch /usr/src/app/workspace/resume/resume.pdf
	$(PRINTER) google-chrome --no-sandbox --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf-no-header --print-to-pdf=/usr/src/app/workspace/resume/resume.pdf http://nginx
	docker compose down
