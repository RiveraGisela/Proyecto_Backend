import express from "express";
import authController from '../controllers/auth-controller';
import authValidator from '../middleware/authValidator'
const router = express.Router();


router.post('/',authValidator.validatorParams,authValidator.validator, authController);


export default router;
