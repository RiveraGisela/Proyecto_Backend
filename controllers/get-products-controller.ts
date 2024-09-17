import GetProducts from "../Dto/GetProductsDto";
import { Request, Response } from "express";
import productService from "../services/ProductService";

let get_products = async (req: Request, res: Response) => {
    try{
        const {nombre_producto}=req.query;
        const products = await productService.GetProducts(new GetProducts(nombre_producto as string));
        return res.status(200).json(products);
    } catch(error:any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({errorInfo: error.sqlMessage});
        }else{
            return res.status(500).json({error: "Internal Server Error", details: error.message});
        }
    }

}

export default get_products;
