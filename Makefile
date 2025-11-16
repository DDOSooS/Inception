.PHONY: up down restart logs clean build rebuild

DOCKER_COMPOSE = docker compose -f ./srcs/docker-compose.yml
DATA_DIR = /home/elcid/Desktop/aghergho/data
HTML_DIR = $(DATA_DIR)/html
MYSQL_DIR = $(DATA_DIR)/mysql

up:
	@echo "Ensuring data directories exist: $(DATA_DIR)"
	@mkdir -p $(HTML_DIR) $(MYSQL_DIR)
	@echo "Starting containers..."
	@$(DOCKER_COMPOSE) up -d

down:
	@echo "Stopping containers..."
	@$(DOCKER_COMPOSE) down

restart: down up

logs:
	@$(DOCKER_COMPOSE) logs -f

clean:
	@echo "Cleaning Docker resources..."
	-@$(DOCKER_COMPOSE) down --rmi all -v
	-@sudo chown -R $(USER):$(USER) $(DATA_DIR) 2>/dev/null || true
	-@rm -rf $(HTML_DIR) $(MYSQL_DIR)
	-@docker system prune -f
	@echo "Clean complete."

build:
	@$(DOCKER_COMPOSE) build

re: clean build up