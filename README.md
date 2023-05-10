# Initial Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Following Application Requires API Key

### `To Obtain API Key`

1. Vist to this URL https://www.omdbapi.com/ and navigate to "apikey"
2. Fill the form and sumbit you will get apiKey in Email
3. Then Create a .env file in root folder and paste the API Key Value

```

REACT_APP_API_KEY = api-key-value

```

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

## Deploying APP

1. For Deploying the App You need to have an accounts on netlify 

2. Then Create a Build file using 'npm run build' command and zip the build folder

3. Click on "Add new Site" => " Upload Manually " 

4. Then Upload zip files to netlify

5. Go to "Site Settings" => "Environmental Variable"
    Add a Environmental Variable By

```

key : REACT_APP_API_KEY

Values:  api-key-value

```

Congrats Finally the App has been Deployed Successfully
