# MERN-Starter
MERN Stack Starter App (Mongo, Express, React, Node)

## How to set up the project
1. Make sure you have NodeJS with npm installed on your machine. If not - you can download it here: https://nodejs.org/en/
2. Clone the repository, navigate to it in the terminal and run the following command: `
```
npm install
```
This will install all required packages defined in `package.json` file.

3. Set up the database - see paragraph below how to set up the database.

4. Open `.env` file and paste link to your MongoDB and your token secret (this can be a random string).

5. Run `npm start`

## How to set up your MongoDB
You can choose from various options - from your local DB to cloud one. Here is a short instruction of creating a free cloud cluster:
1. Create a free account on https://www.mongodb.com/cloud
2. Create a free cluster (select your preferred vendor and location - it's recommended to choose the one nearest your location)
3. On the site, add user with access to the database (under Security -> Database Access) and add configure Network Access - for test purposes, you could go into Network Access -> Add IP Address -> Allow Access from anywhere.

> The instructions above are just a proposition of creating a free cloud instance of MongoDB for testing purposes. If you are planning going to production, you have to check your preferred cloud vendor and modify access/network settings.