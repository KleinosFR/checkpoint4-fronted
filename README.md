This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### This app is due to work together with the associated backend 

The back end repository can be find at : https://github.com/KleinosFR/checkpoint4-backend

# Installation

## 1. Backend

1. Clone the backend repository
2. Run `npm install` on the backend to install dependencies
3. Create a local database
4. Create a .env file at the root directory with the following data :
```PORT=serverPort
DB_HOST=localhost
DB_USER=user
DB_PW=password
DB_DATABASE=database
DB_DIALECT=mysql
DB_DATABASE_TEST=database_test

ADMIN_USERNAME=administratorUsername
ADMIN_PW=administratorPassword

```
5. Run `npm start` to start the backend server (running `npm run dev` will start the server in development mode, using nodemon dependency) 

## 2. Frontend

1. Clone this frontend repository
2. Run `npm install` to install dependencies
3. Edit the .env file to match your backend base url
4. Run one of the below scripts

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

***tests are not implemented in the current version***

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it

# Remaining to do :

## Frontend

* Implement Acts Page
* Implement Gallery Page
* Implement Backoffice for Acts and Artists
* Implement Backoffice for Gallery

## Backend

* Routes have been verified with postman, but some tests must be written to secure them


