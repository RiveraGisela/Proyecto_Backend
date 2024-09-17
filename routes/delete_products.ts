import express from "express";
import deleteProductsController from '../controllers/delete-products-controller';
import verifyToken from '../middleware/VerifyToken';
import deleteValidatorProducts from '../middleware/deleteValidatorProducts';

const router = express.Router();

// Agrega el middleware de verificación del token antes del controlador de eliminación
router.delete('/', verifyToken, deleteValidatorProducts.validatorParams, deleteValidatorProducts.validator, deleteProductsController);

export default router;

