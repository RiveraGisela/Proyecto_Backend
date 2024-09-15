import express from "express";
import deleteProductsController from '../controllers/delete-products-controller';
import deleteValidatorProducts from '../middleware/deleteValidatorProducts'

const router = express.Router();


router.delete('/', deleteValidatorProducts.validatorParams, deleteValidatorProducts.validator, deleteProductsController);


export default router;