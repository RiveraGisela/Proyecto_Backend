import Products from '../Dto/ProductsDto';
import GetProducts from '../Dto/GetProductsDto';
import DeleteProducts from '../Dto/DeleteProductsDto';
import ProductsRepository from '../repositories/ProductsRepository';


class productService{
    static async registerProducts(products: Products){
        return await ProductsRepository.addProducts(products);
    }

    static async GetProducts(getProducts: GetProducts){
        return await ProductsRepository.getProducts(getProducts);
    }

    static async UpdateProducts(products: Products){
        return await ProductsRepository.updateProducts(products);
    }

    static async deleteProducts(deleteProducts: DeleteProducts){
        return await ProductsRepository.deleteProducts(deleteProducts);
    }
}


export default productService