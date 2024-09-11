import {check, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';

let validatorParams=[
    check('nombre_producto').isLength({min:3, max:30}),
    check('precio').isNumeric(),
    check('id_marca').isLength({min:1, max:100})
];
function validator(req: Request, res:Response, next: NextFunction){
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json({errors:errors.array()    
        });
    } next()
}

export default {validatorParams, validator};