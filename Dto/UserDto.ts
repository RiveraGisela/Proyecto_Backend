class User {
    
    private _nombres: string;
    private _apellidos: string;
    private _email: string;
    private _contraseña: string;

    constructor(
        nombres: string,
        apellidos: string,
        email: string, contraseña: string
    ) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._email = email;
        this._contraseña = contraseña;
    }

    // Getters
    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get email(): string {
        return this._email;
    }

    get contraseña(): string {
        return this._contraseña;
    }

    // Setters
    set nombres(nombres: string) {
        this._nombres = nombres;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set email(email: string) {
        this._email = email;
    }

    set contraseña(contraseña: string){
        this._contraseña = contraseña;
    }
}

export default User;