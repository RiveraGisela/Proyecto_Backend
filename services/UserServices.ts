import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import generateHash from '../Helpers/generateHash';
import Auth from '../Dto/AuthDto';
import Products from '../Dto/ProductsDto';
import GetProducts from '../Dto/GetProductsDto';
import DeleteProducts from '../Dto/DeleteProductsDto';


class UserService {
    
    static async register(user: User) {
        user.contraseña = await generateHash(user.contraseña);
        return await UserRepository.add(user);
    }

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }

    static async registerProducts(products: Products){
        return await UserRepository.addProducts(products);
    }

    static async GetProducts(getProducts: GetProducts){
        return await UserRepository.getProducts(getProducts);
    }

    static async UpdateProducts(products: Products){
        return await UserRepository.updateProducts(products);
    }

    static async deleteProducts(deleteProducts: DeleteProducts){
        return await UserRepository.deleteProducts(deleteProducts);
    }
}

export default UserService;