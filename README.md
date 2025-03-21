# Randy Yono's Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**Put your HubSpot developer test account custom objects URL link here:** https://app.hubspot.com/contacts/49526134/objects/2-41869972/views/all/list

![Homepage showing video game characters table](https://i.ibb.co/mFVnd2CN/f2e23500c467.png)
*Figure 1: Homepage displaying video game characters in a table format with edit actions*


![Edit form for video game characters](https://i.ibb.co/rNbzXYr/354934829010.png)
*Figure 2: Form for adding new video game characters or editing existing ones*


---

## Environment Setup

To use this application:

1. Rename `.env.example` to `.env`
2. Add your HubSpot Private App Access Token to the `.env` file
3. Run `npm install` to install dependencies
4. Start the app with `node index.js`

- Your `.env` file should look like this: `HUBSPOT_PRIVATE_APP_ACCESS=your_actual_token_here`
- This keeps your API credentials secure and out of version control.

## Tips:

- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account and include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.
- DO NOT ADD YOUR PRIVATE APP TOKEN TO YOUR REPOSITORY.

## Pre-requisites:

- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Dotenv](https://www.npmjs.com/package/dotenv)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

## Requirements

- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least two new routes in your index.js file and one new pug template for the homepage.
- You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.
