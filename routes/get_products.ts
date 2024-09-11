import express from "express";
import getProductsController from '../controllers/get-products-controller';

const router = express.Router();


router.get('/', getProductsController);


export default router;