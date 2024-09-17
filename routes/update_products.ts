import express from "express";
import updateProductsController from '../controllers/update-products-controller';
import updateValidatorProducts from '../middleware/updateValidatorProducts'
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();


router.put('/',verifyToken, updateValidatorProducts.validatorParams, updateValidatorProducts.validator, updateProductsController);


export default router;