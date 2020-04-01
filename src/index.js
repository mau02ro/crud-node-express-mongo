const express = require('express');
const app = express();
const paht = require('path');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');

//conect database
mongoose.connect('mongodb://localhost/crud-node-express-mongo')
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err))

//settings
app.set('port', 3000);
app.set('views', paht.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRouter);

app.listen(app.get('port'), ()=>{
    console.log('Server on port: ' + app.get('port'));
})