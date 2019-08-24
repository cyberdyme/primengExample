# PrimengExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



==================================
#build the docker image
docker build -t primengexample:dev .

#list all docker images
docker container ls -a

docker stop <CONTAINER-ID>
docker container rm <CONTAINER-ID>

eg: docker container rm cc3f2ff51cab


# run the docker image
docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm primengexample:dev


docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --name foo --rm primengexample:dev
docker exec -it foo ng test --watch=false
docker exec -it foo ng e2e --port 4202


