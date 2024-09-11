import Brand from "../Dto/branDto";
import { Request, Response } from "express";
import UserService from "../services/UserServices";

let register_products= async(req:Request, res:Response)=>{
    try{
        const {nombre_marca}=req.body;
        const register=await UserService.registerBrand(new Brand(nombre_marca))
        return res.status(201).json({status:'Marca registrada con exito'});
    } catch(error:any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({errorInfo: error.sqlMessage});
        }else{
            return res.status(500).json({error: "Internal Server Error", details: error.message});
        }
    }
}

export default register_products;