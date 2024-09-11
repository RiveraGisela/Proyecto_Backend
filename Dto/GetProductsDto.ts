class GetProducts {
    private _nombre_producto:string;

    constructor(nombre_producto:string
    )
    {
        this._nombre_producto = nombre_producto;
        
    }

    get nombre_producto():string{
        return this._nombre_producto;
    }


    set nombre_produto(nombre_produto:string){
        this._nombre_producto = nombre_produto;
    }


}

export default GetProducts; 