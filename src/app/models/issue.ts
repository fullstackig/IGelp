import {Response}from './response'
export class Issue {

    id : string
    titulo : string
    descripcion : string
    fecharegistro : Date
    respuesta : Response[]
}
