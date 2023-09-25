const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views/'));
console.log('Dir', __dirname);
app.get('/home', (req, res) => {
  res.render('home');
})

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})