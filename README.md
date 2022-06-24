# Docker REST API
In this project I use Docker to quickly create a simple REST API 

## Technologies Used
* Node (npm)
* Express
* REST API
* Docker
* Git
* Postman

## Dependencies
* Install Node - https://nodejs.org/en/download/
* Install Docker - https://docs.docker.com/desktop/windows/install/
* Install Git - https://git-scm.com/download/win
* Install Postman - https://www.postman.com/downloads/

## Executing program
* Download the repository to your computer and go to project file
```
git clone ttps://github.com/sayedh/docker-NodeJS-Express-RESTAPI
cd docker-NodeJS-Express-RESTAPI
```
* Build and run the docker app
```
docker build -t myapp .
docker run --publish 3000:3000 myapp 
```
* Finally send a POST with Postman
![Postman-RESTAPI](https://user-images.githubusercontent.com/30685241/175572358-4fa4b448-6cb1-4540-b45a-6f0ed32963fe.png)
