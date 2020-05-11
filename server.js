require('dotenv').config();
const express =require('express'),
app = express(),
port = process.env.PORT || 3000,
expressLayout = require('express-ejs-layouts');
mongoose = require('mongoose'),
bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.set('view engine' , 'ejs');
app.use(expressLayout);

const connection = mongoose.connect(process.env.DB_URI , {useNewUrlParser : true , useUnifiedTopology : true , useCreateIndex : true});
if (connection){
    console.log("sucessful connection");   
}
app.use(bodyParser.urlencoded({extended : true}));
app.use(require('./app/routes'));
app.listen(port , ()=>{
    console.log(`Running sucessfully on port : ${port}`);
    
})