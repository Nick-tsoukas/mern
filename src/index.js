const express = require('express');
const mongoose = require('mongoose');
const app = express();

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const db = require('./config/keys').mongoURI;

// Connect to // DEBUG:

mongoose.connect(db)
  .then((res) => {
    console.log('database connect');
  })
  .catch((err) => {
    console.log(err);
  })

app.get('/', (req, res) => {
  res.send("hello dude ");
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on the port');
})

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
//
// ReactDOM.render(<App />, document.getElementById('app'));
