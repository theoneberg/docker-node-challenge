const express = require('express');
const service = require('./service');
const config = require('./config');

const app = express();

app.get('/', async (request, response) => {
    
    const people = await service.execute();

    let html = `<h1>Full Cycle</h1>`;

    people.forEach((item) => {
        html = html.concat(`- ${item.name}</br>`)
    });

    response.send(html);
});

app.listen(config.app.port);
