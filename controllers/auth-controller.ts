import { Request, Response } from "express";
import Auth from '../Dto/AuthDto';
import UserService from '../services/UserServices';
import generateToken from '../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();

let auth = async (req: Request, res: Response) => {
  try {
    const { email, contraseña } = req.body;
    const authData = new Auth(email, contraseña);
    const login = await UserService.login(authData);
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: login.id}, process.env.KEY_TOKEN as string, 60)
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
