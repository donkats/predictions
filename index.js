const express = require('express');
const path = require('path');
const app = express();
const fetch = require("node-fetch");

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/teamInfo', (_, res) => {
    fetch('https://worldcup.sfg.io/teams/')
      .then((response) => response.json())
      .then((items) => items.sort(sortMenuItems))
      .then((team) => team.map(({country, fifa_code, group_letter})=>({country, fifa_code, group_letter})))
        .then((data) => res.json(data))
      })

  function sortMenuItems(a, b) {
    const groupOfCountryA = a.group_letter.toUpperCase();
    const groupOfCountryB = b.group_letter.toUpperCase(); 
  
    if (groupOfCountryA < groupOfCountryB ) {
      return -1;
    } else if (groupOfCountryA > groupOfCountryB ) {
      return 1;
    } else {
       return 0;
    }
  }

  app.get('/api/resultsNed', (_, res) => {
    fetch('https://worldcup.sfg.io/matches/country?fifa_code=NED')
      .then((response) => response.json())
      .then((match) => match.map(({location, stage_name, home_team_country, away_team_country, datetime})=>({location, stage_name, home_team_country, away_team_country, datetime})))
        .then((data) => res.json(data))
      })

  app.get('/api/:id', (req, res) => {
    fetch('https://worldcup.sfg.io/matches/country?fifa_code=' + req.params.id)
    .then((response) => response.json())
    .then((match) => match.map(({location, stage_name, home_team_country, away_team_country, datetime})=>({location, stage_name, home_team_country, away_team_country, datetime})))
      .then((data) => res.json(data))
    })

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
