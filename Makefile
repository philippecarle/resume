# See https://gazr.io

.PHONY: help

NPM=docker compose run --service-ports node npm
THEME ?= stackoverflow

help: ## Display help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Build image and install npm dependencies
	docker compose up --build --force-recreate  --remove-orphans
	$(NPM) i $(PACKAGE)

test: ## Run tests
	$(NPM) test

watch: ## Run the web app
	$(NPM) run serve -- --theme=$(THEME)

build: ## Build html file
	$(NPM) run export -- index.html --theme=$(THEME)