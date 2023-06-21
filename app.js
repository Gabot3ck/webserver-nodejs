require('dotenv').config();
const express = require('express');
const app = express();
const port = procces.env.PORT;

app.use( express.static('public') );

// app.get('/', (req, res) => {
//   res.send('Hello World')
// });

app.get( '/*' , (req, res) => {
  res.sendFile( __dirname + '/public/404.html' )
} );

app.get('/ventas', (req, res) => {
  res.send('Ventas');
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})