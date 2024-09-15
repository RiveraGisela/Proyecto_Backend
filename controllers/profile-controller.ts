import { Request, Response } from "express";

let profile = async (req: Request, res:Response)=>{
    try{
        const idUser = req.body.id;
        return res.status(200).json(
            {
                status:'Get profile OK',id:idUser
            }
        );
    }catch(error:any){
        return res.status(500).json({
            errorInfo:"An unknow error has ocurred"
        });
    }

}

export default profile;