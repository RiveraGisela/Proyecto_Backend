import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('nombres').isLength({min: 1, max: 80}),
    check('apellidos').isLength({ min: 1, max: 80}),
    check('email').isEmail(),
    check('contraseña').isLength({ min: 1, max: 20})
    ];
        

    function validator(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
    
    


    export default {
    validatorParams,
    validator
};