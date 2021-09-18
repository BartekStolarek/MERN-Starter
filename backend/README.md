# MERN-Backend
Backend for MERN Stack Starter App (Mongo, Express, React, Node)

## Want to run the whole project (Backend + Frontend + MongoDB)?
Navigate to an upper folder or follow [this link](../README).

## How to run the Backend application
1. Make sure you have NodeJS with npm installed on your machine. If not - you can download it here: https://nodejs.org/en/
2. Clone the repository, navigate to it in the terminal and run the following command: `
```
npm install
```
This will install all required packages defined in `package.json` file.

3. In the app root folder, create an `.env` file with `ENVIRONMENT`, `DB_CONNECT` and `TOKEN_SECRET` variables. You can use `.env.template` file as a reference.

4. Run `npm start`

> Note: If you are running the MERN application using `docker-compose`, the `.env` file will be automatically created as a copy of the `.env.template` file, which default values are configured to work correctly together.

> Note: if you are not running the MERN application using `docker-compose`, as described in the [root folder](../README), make sure you have MongoDB running locally on as a web instance. Example configuration of cloud MongoDB can be found in the paragraph below.

## How to set up your MongoDB
You can choose from various options - from your local DB to cloud one. Here is a short instruction of creating a free cloud cluster:
1. Create a free account on https://www.mongodb.com/cloud
2. Create a free cluster (select your preferred vendor and location - it's recommended to choose the one nearest your location)
3. On the site, add user with access to the database (under Security -> Database Access) and add configure Network Access - for test purposes, you could go into Network Access -> Add IP Address -> Allow Access from anywhere.

> The instructions above are just a proposition of creating a free cloud instance of MongoDB for testing purposes. If you are planning going to production, you have to check your preferred cloud vendor and modify access/network settings.