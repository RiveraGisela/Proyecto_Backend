import { Request, Response } from "express";
import Auth from '../Dto/AuthDto';  // Asegúrate de que el path sea correcto
import UserService from '../services/UserServices';
import generateToken from '../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();

let auth = async (req: Request, res: Response) => {
  try {
    const { email, contraseña } = req.body;
    // Crear una instancia de Auth con los parámetros correctos
    const authData = new Auth(email, contraseña);
    const login = await UserService.login(authData);
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: login.id}, process.env.KEY_TOKEN as string, 60)  // 60 minutos de validez del token
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Internal server error"});
  }
}

export default auth;
