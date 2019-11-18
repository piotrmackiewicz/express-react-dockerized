setup:
	cp .env client/
	cd client && docker build . && cd ../server && docker build . && cd ../

up:
	docker-compose up

build:
	docker-compose build --no-cache --force-rm