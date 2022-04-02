# MERN
MERN Stack Starter App (Mongo, Express, React, Node)

## What is this repository?
This is a starer application for the simple, yet fully working application with:
* Authentication (Login and Signup).
* Database operations (adding new user, getting user's profile information).
* Frontend and Backend working together, as a separate applications.
* Ability to dockerize app, and deploy with Kubernetes, Helm or docker-compose.
* Basic tests for Backend endpoints and Frontend components.

## Technologies used in project
### Frontend:
* React
* React Testing Library
* ui-kit

### Backend:
* Node.js
* TypeScript
* Jest

### Database:
* MongoDB

### Deployments:
* Docker
* Kubernetes
* Helm
* docker-compose

## Run the project using Kubernetes
1. Clone the repository.
2. Make sure you have [Docker](https://www.docker.com/) installed on your machine alongside with [Kubernetes](https://kubernetes.io/). 
> Tip: If you are on a Windows Machine, you can download Docker Desktop Tool which allows you to install Kubernetes as well.
3. Open the repository in the file explorer, go to `/backend`, copy `.env.template` file and paste it in the same directory with the `.env` name. Do the same for the `/frontend` folder.
4. Open Terminal, and navigate to this folder.
5. Build Docker images for the Backend and Frontend:
```
cd backend
docker build . -t mern-backend:1.0
cd ../frontend
docker build . -t mern-frontend:1.0
```
6. Start up Frontend, Backend and MongoDB by running the following set of commands (make sure to execute them from the root folder):
```
kubectl apply -f database

kubectl apply -f "backend/backend.deployment.yml"
kubectl apply -f "backend/backend.service.yml"

kubectl apply -f "frontend/frontend.deployment.yml"
kubectl apply -f "frontend/frontend.service.yml"
```

This will deploy MongoDB, Backend, Frontend and create services exposing IP addresses with Load Balancers.
* To view the Frontend application, type the following URL in your browser: [localhost:3000](http://localhost:3000). Backend would be run on `localhost:3002`.
* To view status of your pods, run: 
```
kubectl get pods
```
* To access logs of a specific pod, run (for example for the backend): 
```
kubectl logs deployments/mern-backend
```
* To delete deployment and service (for example for backend), run:
```
kubectl delete deployment/backend-app
kubectl delete services/backend-app
```
> Remember to delete all your deployments after you'll no longer want to use the app. To view if any remaining pods or services are running, type: `kubectl get pods` and `kubectl get services`.

## Run the project using Helm
1. Clone the repository.
2. Make sure you have [Docker](https://www.docker.com/) installed on your machine alongside with [Kubernetes](https://kubernetes.io/) and optionally [minikube](https://minikube.sigs.k8s.io/docs/). 
> **Note:** This configuration was prepared on Windows 10 Machine with `kubectl` version 1.22.3 and [minikube](https://minikube.sigs.k8s.io/docs/) version 1.24.0. Configuration for Linux or macOS environments might be different.

> **Tip:** If you are on a Windows Machine, you can download Docker Desktop Tool which allows you to install Kubernetes as well.
3. Open the repository in the file explorer, go to `/backend`, copy `.env.template` file and paste it in the same directory with the `.env` name. Do the same for the frontend folder.
4. Open Terminal, and navigate to this folder.
5. Build Docker images for the Backend and Frontend:
```
cd backend
docker build . -t mern-backend:1.0
cd ../frontend
docker build . -t mern-frontend:1.0
```

6. Navigate to `chart/mern-starter/charts` folder and deploy applications using Helm
```
helm install mern-database .\database\ --values .\database\values.yaml

helm install mern-frontend .\frontend\ --values .\frontend\values.yaml

helm install mern-backend .\backend\ --values .\backend\values.yaml
```

> **Tip:** If you would like to make some changes to the deployment and update it, run then:
`
helm upgrade [release] [chart-location] [values]
`
For example (for backend):
`
helm install mern-backend .\backend\ --values .\backend\values.yaml
`
7. Verify if deployments are running one of the following commands:
```
helm list
kubectl get all
```
And open your browser at: https://localhost:3000
Frontend application should load there, whereas backend application should be available at https://localhost:3002 (if you copied and did not modify `.env` file for the Frontend application, it should automatically point to the backend).

8. When you would like to finish working with the project on your local machine, do not forget to delete deployments, so your machine will not use resources! Do it by calling the following commands:
```
helm uninstall mern-backend
helm uninstall mern-database
helm uninstall mern-frontend
```


## Run the project using docker-compose
1. Clone the repository.
2. Make sure you have [Docker](https://www.docker.com/) installed on your machine.
3. Open the repository in the file explorer, go to `/backend`, copy `.env.template` file and paste it in the same directory with the `.env` name. Do the same for the `/frontend` folder.
4. Open Terminal, and navigate to this folder.
5. Build Docker images for the Backend and Frontend:
```
cd backend
docker build . -t mern-backend:1.0
cd ../frontend
docker build . -t mern-frontend:1.0
```
6. Run `docker-compose up`. This will start the application by spinning up Docker images of the Frontend and Backend applications alongside with MongoDB image.

* To view the Frontend application, type the following URL in your browser: [localhost:3000](http://localhost:3000). Backend would be run on `localhost:3002`.
* To stop the application, run 
```
docker-compose down
```

## Run a single application
Just navigate to the [Frontend](frontend/README.md) or [Backend](backend/README.md) folders, where you can find detailed instructions on how to run applications separately.

> Note, that you are able to run the whole project by using Docker, as described in the above section, or by manually running Frontend and Backend applications.