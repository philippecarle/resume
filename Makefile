# See https://gazr.io

.PHONY: help

NODE=docker compose run --service-ports node
NPM=$(NODE) npm
YARN=$(NODE) yarn
THEME ?= stackoverflow

help: ## Display help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Build image and install npm dependencies
	docker compose up --build --force-recreate  --remove-orphans
	$(YARN) i

add: ## Build image and install npm dependencies
	$(YARN) add $(PACKAGE)

format: ## Format code
	docker run -v `pwd`:`pwd` -w `pwd` python:3.9.10-alpine python -m json.tool resume.json > resume_pretty.json
	mv -f resume_pretty.json resume.json

test: ## Run tests
	$(YARN) test

watch: ## Run the web app
	$(YARN) run serve -- --theme=$(THEME)

build: ## Build html file
	$(YARN) run export -- index.html --theme=$(THEME)