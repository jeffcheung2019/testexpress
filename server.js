const express = require('express');
const app = express();
const port = 5500;
const cors = require('cors');

// before enable CORS IMPORTANT *****
//http://localhost:5500 ALL methods

const corsOptions = {
    origin: ['http://localhost:3000', 'https://www.google.com'], // Whitelist a specific origin
    // methods: {
    //     'http://localhost:3000': ['GET', 'POST'], // Allow GET and POST for http://localhost:3000
    //     'https://www.google.com': ['GET'], // Allow only GET for https://www.google.com
    //   },
    methods: ['GET', 'POST']
  };

// Enable CORS for all routes
app.use(cors(corsOptions));

//after enabled CORS with cors option
//http://localhost:5500 ALL methods
//http://localhost:3000 GET POST
//http://www.google.com:3000 GET POST



// app.use(express.json()); // Enable parsing of JSON request bodies


// Method : get 

app.get('/abc', (req, res) => {
  res.send('Hello, World!');
});

app.post('/abc', (req, res) => {
    // console.log("req.body ", req.body)
    // // const { username, password } = req.body; // Access the parameters from the request body
    // const username = req.body.username
    // const password = req.body.password

    res.status(200).send('Post data');
});


  


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// backend server A
// https://abc.com

// frontend server B serve client browser
// https://def.com

