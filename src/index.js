const express = require('express');

/*** SERVER ROUTING ***/
const app = express();

// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 5000;

// Text to display for the service name
const serviceName = process.argv.length > 3 ? process.argv[3] : 'website';

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `0.0.0.0`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};

// Serve up the static content
app.use(express.static('public'));

app.use(express.json());

app.use(allowCrossDomain)

const logger = (req, res, next) => {
    console.log(`RECEIVED ${req.method} REQUEST`);
    console.log(`DateTime: ${new Date()}`)
    next();
}

app.use(logger);

app.use((_req, res) => {
    res.sendFile('./public/index.html', { root: './' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});