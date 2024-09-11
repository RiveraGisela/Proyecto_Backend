class Products{
    private _nombre_producto:string;
    private _precio:number;
    private _id_marca:number

    constructor(nombre_producto:string,
        precio:number,
        id_marca:number

    )
    {
        this._nombre_producto = nombre_producto;
        this._precio = precio;
        this._id_marca = id_marca;
    }

    get nombre_producto():string{
        return this._nombre_producto;
    }

    get precio():number{
        return this._precio;
    }

    get id_marca():number{
        return this._id_marca;
    }

    set nombre_produto(nombre_produto:string){
        this._nombre_producto = nombre_produto;
    }

    set precio(precio:number){
        this._precio = precio;
    }

    set id_marca(id_marca:number){
        this._id_marca = id_marca;
    }

}

export default Products; 
