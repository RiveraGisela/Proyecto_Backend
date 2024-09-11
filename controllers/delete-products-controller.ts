import { Request, Response } from "express";
import UserService from "../services/UserServices";
import DeleteProducts from "../Dto/DeleteProductsDto";

let delete_products= async (req:Request, res:Response) => {
    try{
        const {nombre_producto, id_marca}=req.body;
        const deleteproducts=await UserService.deleteProducts(new DeleteProducts(nombre_producto,id_marca));
    
        return res.status(201).json({message: 'Producto eliminado con exito',});
    } catch(error:any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({errorInfo: error.sqlMessage});
        }else{
            return res.status(500).json({error: "Error, no se pudo eliminar el producto", details: error.message});
        }
    }
}

export default delete_products;