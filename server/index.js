import express from 'express';

import bodyParser from'body-parser';
import cors from 'cors';

import mongoose from 'mongoose';

// import routes 

import postRoutes from './routes/post.js';

// intiealise the app to express

const app = express();

// set the routes to postRoutes

app.use('/posts' , postRoutes);

// body-parser parses your request and converts it into a format from which you can easily 
//extract relevant information that you may need.

app.use(bodyParser.json({ limit : "30mb" , extended : "true"}));
app.use(bodyParser.urlencoded({ limit : "30mb" , extended : "true"}));

// Cross-Origin Resource Sharing . It allows us to relax the security applied to an API
app.use(cors());

// connect to data base
const db_connection = "mongodb+srv://alhmidi:sad4117754@cluster0.dd0yv.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose.connect(db_connection , {
    'useNewUrlParser': true, // To fix all deprecation warnings
    'useUnifiedTopology' :true,//
    }).then(() => app.listen(PORT, () => console.log(`server is really listening on port : ${PORT} `)) )
    .catch((error) => console.log(error.message));
