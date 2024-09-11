import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/AuthDto';
import GetProducts from '../Dto/GetProductsDto';
import DeleteProducts from '../Dto/DeleteProductsDto';
import bcrypt from 'bcryptjs';
import Products from '../Dto/ProductsDto';


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

    static async addProducts(products: Products){
      const sql = 'INSERT INTO productos (nombre_producto, precio, id_marca) VALUES (?,?,?)';
      const values = [products.nombre_producto, products.precio, products.id_marca];
      return db.execute(sql,values)

    }

    static async getProducts(getProducts: GetProducts){
      const sql = 'SELECT * FROM productos JOIN marcas USING(id_marca) WHERE nombre_producto=?';
      const values = [getProducts.nombre_producto];
      return db.execute(sql,values)
    }

    static async updateProducts(products: Products){
      const sql = 'UPDATE productos SET precio = ?, id_marca = ? WHERE nombre_producto = ?'
      const values = [products.precio, products.id_marca, products.nombre_producto]
      return db.execute(sql,values)
      
    }

    static async deleteProducts(deleteProducts : DeleteProducts){
      const sql = 'DELETE FROM productos WHERE nombre_producto = ? AND id_marca = ?';
      const values = [deleteProducts.nombre_producto, deleteProducts.id_marca];
      return db.execute(sql,values);
    }


}


export default UserRepository;