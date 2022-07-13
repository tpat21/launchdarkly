# Getting Started with React Application

## Available Script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## How To Use 

From your command line, first clone the repo:

```bash
# Clone the repository
$ git clone https://github.com/tpat21/launchdarkly.git

# Move into the repository
$ cd launchdarkly

# Install the React SDK
$ npm install launchdarkly-react-client-sdk
```

## Using Feature Flags

# clientSideID
Ensure clientSideID within the App.js file matches with your clientSideID within your LaunchDarkly dashboard

# form flag
1. Create a new feature flag call "form"
2. Select the option "SDKs using Client-side ID" 
3. Select Boolean for Flag variations 
4. Save flag

# prodCode flag
1. Create a new feature flag call "prodCode"
2. Select the option "SDKs using Client-side ID" 
3. Select Boolean for Flag variations 
4. Save flag
5. Set the following target users who match this rule: If email contains @launchdarkly.com serve true
6. Set default rule to false







