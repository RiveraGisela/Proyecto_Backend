import express from 'express';
import registerProductController from '../controllers/register-products-controller';
import resgiterValidatorProducts from '../middleware/resgiterValidatorProducts';

const router= express.Router();
router.post('/',resgiterValidatorProducts.validatorParams, resgiterValidatorProducts.validator ,registerProductController )

export default router;