setup:
	cp .env client/
	cd client && docker build . && cd ../server && docker build . && cd ../

up:
	docker-compose up