import express from "express";
import registerController from '../controllers/register-controller';
import registerValidator from '../middleware/RegisterValidator';

const router = express.Router();


router.post('/', registerValidator.validatorParams, registerValidator.validator, registerController);


export default router;