const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./server/routes/api');
const path = require('path');
const {db} = require('./server/models/')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'))

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'browser/index.html'));
})

app.use('/api', api)

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err)
})

// db.sync({force: true})
//   .then(() => {
    app.listen(3000, function(req, res, next) {
      console.log('Server is listening');
    }) // })
