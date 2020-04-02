const express = require('express');
const path = require('path');
const app = express();
const fetch = require("node-fetch");

const baseUrl = "https://worldcup.sfg.io/matches/country?fifa_code=";
const teamCode = "USA";
const apiUrl = baseUrl + teamCode;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getList', (_, res) => {
    fetch('https://worldcup.sfg.io/teams/')
      .then((response) => response.json())
      .then((data) => res.json(data));
  });

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);


