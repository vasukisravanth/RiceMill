const express=require('express')
const bodyParser = require('body-parser');
const session=require('express-session')
const ejs = require('ejs');
const path = require('path');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000
mongoose.connect("mongodb+srv://vas:sravan@cluster0.n7bw0.mongodb.net/Rice",  { useUnifiedTopology: true });
const res = require('express/lib/response');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());
const loginroute = require('./routes/loginroute');
const tokenroute=require('./routes/tokenroutes');
const customerhomeroute=require('./routes/customerhomeroute');
const cartitemroute=require('./routes/cartitemroute')

app.use(loginroute);
app.use(tokenroute);
app.use(customerhomeroute)
app.use(cartitemroute)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', function (req, res) {
    res.render('Home');
});





app.listen(PORT, () => {
    console.log('server started');
})