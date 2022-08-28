const express = require('express');

// reade index files 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// Declare app Variable
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

// talk to server 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// chain the listen() method onto server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });




