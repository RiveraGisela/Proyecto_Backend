import express from "express";
import updateProductsController from '../controllers/update-products-controller';
import updateValidatorProducts from '../middleware/updateValidatorProducts'

const router = express.Router();


router.put('/',updateValidatorProducts.validatorParams, updateValidatorProducts.validator, updateProductsController);


export default router;