import {check, validationResult} from 'express-validator'
import { Request, Response, NextFunction } from 'express'

let validatorParams=[
    check('email').isEmail(),
    check('contraseña').isLength({ min: 5, max: 20})
];

function validator( req:Request, res:Response, next: NextFunction){
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    next();
}

export default {
    validator, validatorParams
}