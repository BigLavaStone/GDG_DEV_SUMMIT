const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
const data = {
    endpoint1: { message: 'Keyword#1' },
    endpoint2: { message: 'No Keyword Here, At least you lost your time!!' },
    endpoint3: { message: 'Well Tried but no Keyword here' },
    endpoint4: { message: 'keyword#2' },
    endpoint5: { message: 'keyword#3' },
    publicEndpoint1: { message: 'Public data for endpoint 1' },
    publicEndpoint2: { message: 'Public data for endpoint 2' }
};

// Middleware to check API key
const apiKeyMiddleware = (requiredApiKey) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const apiKey = authHeader && authHeader.split(' ')[1]; // Extract the API key from the Authorization header
        if (apiKey !== requiredApiKey) {
            return res.status(403).send('Forbidden: Invalid API key');
        }
        next();
    };
};

// Define endpoints with different API keys
app.get('/jow04h/Uhd3fw', apiKeyMiddleware('React'), (req, res) => {
    res.json(data.endpoint1);
});

app.get('/i89e4t/K47heQ', apiKeyMiddleware('Angular'), (req, res) => {
    res.json(data.endpoint2);
});

app.get('/opsj9ylZ4/0tuIkl', apiKeyMiddleware('Django'), (req, res) => {
    res.json(data.endpoint3);
});

app.get('/llaso0ko/xU8oZp', apiKeyMiddleware('ASP.NET'), (req, res) => {
    res.json(data.endpoint4);
});

app.get('/qwlp0k/sImf4e', apiKeyMiddleware('Spring'), (req, res) => {
    res.json(data.endpoint5);
});

// Define public endpoints without API keys
app.get('/api/publicEndpoint1', (req, res) => {
    res.json(data.publicEndpoint1);
});

app.get('/api/publicEndpoint2', (req, res) => {
    res.json(data.publicEndpoint2);
});

// Start the server
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});