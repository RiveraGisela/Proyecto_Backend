class DeleteProducts {

    private _nombre_producto:string;
    private _id_marca:number;

    constructor(
        nombre_producto:string,
        id_marca:number
    )
    {
        this._nombre_producto = nombre_producto;
        this._id_marca= id_marca;
        
    }

    get nombre_producto():string{
        return this._nombre_producto;
    }

    get id_marca():number{
        return this._id_marca;
    }


    set nombre_producto(nombre_producto:string) {
        this._nombre_producto = nombre_producto;
    }

    set id_marca(id_marca:number) {
        this._id_marca = id_marca;
    }


}

export default DeleteProducts; 