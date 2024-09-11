import express from "express";
import deleteProductsController from '../controllers/delete-products-controller';

const router = express.Router();


router.delete('/', deleteProductsController);


export default router;