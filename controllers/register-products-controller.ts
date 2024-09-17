import Products from "../Dto/ProductsDto";
import { Request, Response } from "express";
import productService from "../services/ProductService";

let register_products= async(req:Request, res:Response)=>{
    try{
        const {nombre_producto, precio, id_marca}=req.body;
        const register=await productService.registerProducts(new Products(nombre_producto, precio,id_marca))
        return res.status(201).json({status:'Producto registrado con exito'});
    } catch(error:any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({errorInfo: error.sqlMessage});
        }else{
            return res.status(500).json({error: "Internal Server Error", details: error.message});
        }
    }
}

export default register_products;