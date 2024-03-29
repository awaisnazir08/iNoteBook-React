# iNotebook App

Welcome to iNotebook, a web application for managing your notes. This app is built using MongoDB, React.js, Node.js, HTML, and CSS.

## Features

- User authentication with JWT token
- Login and signup functionality
- Add, update, and delete notes
- Interactive user interface

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/awaisnazir08/iNotebook-React.git
   cd iNotebook


## Install dependencies for both backend and frontend
```bash
npm install
```

## Running the App
This command requires `concurrently` to be downloaded so both the back-end and front-end servers can run simultaneously
```bash
npm install concurrently
```
To ensure that concurrently works properly, update the `package.json` of the front-end react module.
## Example
 `"both": "concurrently \"npm start\" \"nodemon backend/index.js\""`

Now run in the terminal: 
```bash
npm run both
```
# Backend (Node.js) Modules
express: Web application framework for Node.js
mongoose: MongoDB object modeling for Node.js
jsonwebtoken: JSON Web Token implementation for authentication
bcrypt: Password hashing library
concurrently: Run multiple npm scripts concurrently

# Frontend (React.js) Modules
react: JavaScript library for building user interfaces
react-router-dom: Declarative routing for React.js
axios: Promise-based HTTP client for the browser and Node.js
react-bootstrap: Bootstrap components as React components
react-toastify: Notification library for React.js applications

# Screenshots

### Home Page

![Home](public/inotebook.png)

### Login Page

![Login](public/login.png)

### Signup Page

![Signup](public/signup.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
