const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Please DO NOT INCLUDE the private app access token in your repo. Don't do this practicum in your normal account.
const PRIVATE_APP_ACCESS = process.env.HUBSPOT_PRIVATE_APP_ACCESS;
console.log(PRIVATE_APP_ACCESS);

// TODO: ROUTE 1 - Create a new app.get route for the homepage to call your custom object data. Pass this data along to the front-end and create a new pug template in the views folder.

// * Code for Route 1 goes here
// ROUTE 1 - Homepage route to display all video game characters
// ROUTE 1 - Homepage route to display all video game characters
app.get('/', async (req, res) => {
    const charactersEndpoint = 'https://api.hubspot.com/crm/v3/objects/p_video_game_characters?properties=name,series,year';
    const headers = {
      Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
      'Content-Type': 'application/json'
    };
    
    try {
      const response = await axios.get(charactersEndpoint, { headers });
      const characters = response.data.results;
      res.render('homepage', { 
        title: 'Video Game Characters | HubSpot Integration', 
        characters: characters 
      });
    } catch (error) {
      console.error('Error fetching characters:', error);
      res.status(500).send('Error fetching characters data');
    }
  });


// TODO: ROUTE 2 - Create a new app.get route for the form to create or update new custom object data. Send this data along in the next route.

// * Code for Route 2 goes here
// ROUTE 2 - Form route for adding or editing video game characters
app.get('/update-cobj', async (req, res) => {
    try {
      const pageTitle = 'Update Custom Object Form | Integrating With HubSpot I Practicum';
      
      // Check if we're editing an existing character
      if (req.query.id) {
        const characterId = req.query.id;
        const characterEndpoint = `https://api.hubspot.com/crm/v3/objects/p_video_game_characters/${characterId}?properties=name,series,year`;
        const headers = {
          Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
          'Content-Type': 'application/json'
        };
        
        const response = await axios.get(characterEndpoint, { headers });
        const character = response.data;
        
        res.render('updates', { 
          pageTitle,
          character
        });
      } else {
        // If no ID, we're creating a new character
        res.render('updates', { 
          pageTitle
        });
      }
    } catch (error) {
      console.error('Error rendering form:', error);
      res.status(500).send('Error rendering form');
    }
  });

// TODO: ROUTE 3 - Create a new app.post route for the custom objects form to create or update your custom object data. Once executed, redirect the user to the homepage.

// * Code for Route 3 goes here
// ROUTE 3 - POST route for submitting character data
app.post('/update-cobj', async (req, res) => {
  // Set up headers for API request
  
  // Create data object with form values
  // Properties: name, series, year
  
  // Check if we're updating or creating:
  // - If ID exists in the form data, we're updating
  
  // For updating:
  // - Use PATCH request to update existing character
  // - Include character ID in the endpoint
  
  // For creating:
  // - Use POST request to create new character
  
  // Redirect to homepage after successful operation
  
  // Handle any errors during the API request
});


/** 
* * This is sample code to give you a reference for how you should structure your calls. 

* * App.get sample
app.get('/contacts', async (req, res) => {
    const contacts = 'https://api.hubspot.com/crm/v3/objects/contacts';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }
    try {
        const resp = await axios.get(contacts, { headers });
        const data = resp.data.results;
        res.render('contacts', { title: 'Contacts | HubSpot APIs', data });      
    } catch (error) {
        console.error(error);
    }
});

* * App.post sample
app.post('/update', async (req, res) => {
    const update = {
        properties: {
            "favorite_book": req.body.newVal
        }
    }

    const email = req.query.email;
    const updateContact = `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    try { 
        await axios.patch(updateContact, update, { headers } );
        res.redirect('back');
    } catch(err) {
        console.error(err);
    }

});
*/


// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));