import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';



class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO administradores (nombres,apellidos,email, contraseña) VALUES (?, ?, ?, ?)';
        const values = [user.nombres,user.apellidos, user.email, user.contraseña];        
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT * FROM administradores WHERE email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.contraseña, result[0][0].contraseña);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id}
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }

    

}


export default UserRepository;