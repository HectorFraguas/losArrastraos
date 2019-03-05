export class Rutas {

    id: number
    nombre: string
    provincia: string
    salida: string
    llegada: string
    descripcion: string
    tipoRuta: string
    latitud: string
    longitud: string

    constructor(pId,pNombre, pProvincia, pSalida, pLlegada, pDescripcion, pTiporuta, pLatitud, pLongitud) {

        this.id = pId
        this.nombre = pNombre
        this.provincia = pProvincia
        this.salida = pSalida
        this.llegada = pLlegada
        this.descripcion = pDescripcion
        this.tipoRuta = pTiporuta
        this.latitud = pLatitud
        this.longitud = pLongitud
    }
}