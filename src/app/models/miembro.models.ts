export class Miembro {

    id: number
    nombre: string
    moto: string
    cargo: string
    foto: string

    constructor(pId, pNombre, pMoto, pCargo, pFoto) {

        this.id = pId
        this.nombre = pNombre
        this.moto = pMoto
        this.cargo = pCargo
        this.foto = pFoto
    }
}