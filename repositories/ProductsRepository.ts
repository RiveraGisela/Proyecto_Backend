import db from '../config/config-db';
import GetProducts from '../Dto/GetProductsDto';
import DeleteProducts from '../Dto/DeleteProductsDto';
import Products from '../Dto/ProductsDto';


class ProductsRepository{
    static async addProducts(products: Products){
        const sql = 'INSERT INTO productos (nombre_producto, precio, id_marca) VALUES (?,?,?)';
        const values = [products.nombre_producto, products.precio, products.id_marca];
        return db.execute(sql,values)
    
        }
    
        static async getProducts(getProducts: GetProducts) {
        const sql = 'SELECT * FROM productos JOIN marcas USING(id_marca) WHERE nombre_producto = ?';
        const values = [getProducts.nombre_producto];
        const [rows] = await db.execute(sql, values);
        return rows;
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

export default ProductsRepository
