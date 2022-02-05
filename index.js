import express from 'express';
import { read } from './jsonFileStorage.js';

// const express = require('express');
const app = express()
const port = 3004

// const handleIncomingRequestFileRead = (request, response) => {
//   console.log('request came in');
//   read('data.json', (err, jsonContentObj) => {
//     console.log(`where is my object`,jsonContentObj);
//     response.send(jsonContentObj);
//   });
//   console.log(`sighted`)
// };

// app.get('/sightings/:index', handleIncomingRequestFileRead);

app.get('/sightings/:index', (request, response) => {
   console.log('request came in');
    read('data.json', (err, jsonContentObj)=> {
    console.log(`where is my object`,jsonContentObj);
    // response.send(jsonContentObj);
    const content = `
    <html>
      <body>
        <h1>${jsonContentObj.sightings[request.params.index].YEAR}</h1>
        <h1>${jsonContentObj.sightings[request.params.index].STATE}</h1>
        <h1>${jsonContentObj.sightings[request.params.index].OBSERVED}</h1>
        </body>
    </html>
  `;
  response.send(content);
   })
})
    
  

app.listen(port,() => {
  console.log(`so sighted`)
})