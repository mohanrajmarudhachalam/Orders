const express = require('express')
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 4000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use('/admin', require('./routes/productRoutes/adminRoutes'));
app.use('/products', require('./routes/productRoutes/productRoutes'));
app.use('/user', require('./routes/userRoutes/userRoutes'));
app.use(errorHandler);
app.listen(port, () => {
  connectDB();
  console.log(`Order Backend Running in Port: ${port}`);
  
});
