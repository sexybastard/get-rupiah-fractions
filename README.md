This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

How to run the project:

### `yarn install`

Install all the project's dependencies.

### `yarn start` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner using Jest.<br>

## Tech

This app is build using ReactJs

## Code Explanations

This app consists of App.js as the main screen which loads all the components inside of it. The components are:
* Header => The component that contains the title 'Get Rupiah Fractions'
* InputNumber => The component that responsible to retrieve user input, then validate, and finaly calculate the result
* DisplayResult => The component that responsible to retrieve the calculated result that is generated by InputNumber component and display it

We also have utils/index.js which contains all function that needed by InputNumber component to process the data.

And at last we also have a .test.js file for each .js file to cover the test/spec for unit and integration testing.


