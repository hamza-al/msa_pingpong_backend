


// require('sexy-require')
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const { add } = require('nodemon/lib/rules');
const app = express();
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},()=>{
    console.log('Connected')
});

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.get('/',(req,res)=>{
    res.send('ok');
})
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

app.listen(8800,()=>{
    console.log("Server is up and running v2");
})  




