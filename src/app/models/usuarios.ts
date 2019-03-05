
export class Usuarios {

    id: number
    nombre: string
    usuario: string
    email: string
    imagen: string

    constructor(pId, pNombre, pUsuario, pEmail, pImagen) {

        this.id = pId
        this.nombre = pNombre
        this.usuario = pUsuario
        this.email = pEmail
        this.imagen = pImagen
    }
}