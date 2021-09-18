# MERN
MERN Stack Starter App (Mongo, Express, React, Node)

## What is this repository?
This is a starer application for the simple, yet fully working application with:
* Authentication (Login and Signup)
* Database operations (adding new user, getting user's profile information)
* Frontend and Backend working together, as a separate applications
* Basic tests for Backend endpoints and Frontend components

## How to run this project?
1. Clone the repository.
2. Make sure you have [Docker](https://www.docker.com/) installed on your machine.
3. Open the repository in the file explorer, go to `/backend`, copy `.env.template` file and paste it in the same directory with the `.env` name. Do the same for the `/frontend` folder.
4. Open Terminal, and navigate to this folder.
5. Run `docker-compose up`. This will start the application by spinning up Docker images of the Frontend and Backend applications alongside with MongoDB image.
6. Open `localhost:3000` to see the UI communicating with the backend, which by default will run on `localhost:3002`.
7. To stop the application, run `docker-compose down`.

## How to run a single application?
Just navigate to the [Frontend](frontend/README.md) or [Backend](backend/README.md) folders, where you can find detailed instructions on how to run applications separately.

> Note, that you are able to run the whole project by using Docker, as described in the above section, or by manually running Frontend and Backend applications.