import express from "express";
import bodyParser from 'body-parser';
import register from './routes/register';
import auth from './routes/auth';
import register_products from './routes/register_products';
import get_products from './routes/get_products';
import update_products from './routes/update_products';
import delete_products from './routes/delete_products'
import dotenv from "dotenv";
import profile from "./controllers/profile-controller";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/register_products', register_products );
app.use('/get_products', get_products );
app.use('/update_products', update_products);
app.use('/delete_products', delete_products);
app.use('/profile', profile);


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
