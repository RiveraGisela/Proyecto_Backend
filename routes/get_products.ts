import express from "express";
import getProductsController from '../controllers/get-products-controller';
import getValidatorProducts from '../middleware/getValidatorProducts'

const router = express.Router();


router.get('/',getValidatorProducts.validatorParams, getValidatorProducts.validator, getProductsController);


export default router;