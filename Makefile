docker_build:
	docker image build --tag node-express-boilerplate .

docker_run:
	docker run --publish 3042:3042 node-express-boilerplate
