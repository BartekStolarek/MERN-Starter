# MERN-UI
UI for MERN Stack Starter App (Mongo, Express, React, Node)

## Want to run the whole project (Backend + Frontend + MongoDB)?
Navigate to an upper folder or follow [this link](../README).

## How to run the Frontend application
1. Clone the repository, navigate to it in the terminal and run the following command: `
```
npm install
```
This will install all required packages defined in `package.json` file.

2. In the app root folder, create an `.env` file with `REACT_APP_HOSTNAME` variable. You can use `.env.template` file as a reference.

3. Run `npm start`

> Note: If you are running the MERN application using `docker-compose`, the `.env` file will be automatically created as a copy of the `.env.template` file, which default values are configured to work correctly together.

## How to run tests
`npm test` command would run tests written in Jest and react-testing-library.