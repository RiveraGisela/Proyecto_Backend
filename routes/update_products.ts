import express from "express";
import updateProductsController from '../controllers/update-products-controller';

const router = express.Router();


router.put('/', updateProductsController);


export default router;