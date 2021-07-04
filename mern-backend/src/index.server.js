const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth')

env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.142mt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.142mt.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('Database conected')
    })

app.use(bodyParser());
app.use('/api', authRoutes);



app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`);
})