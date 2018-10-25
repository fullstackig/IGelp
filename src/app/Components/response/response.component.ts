import { Component, OnInit } from '@angular/core';
import { Response } from "../../models/response";
import * as moment from 'moment'

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styles: []
})
export class ResponseComponent implements OnInit {

  constructor() { }
  response: Response
  fechaActual: string
  ngOnInit() {
    moment.locale('es')
    this.response = new Response()
    this.fechaActual = moment().format('LL')
    this.response = {
      autor: "Jennifer Anniston",
      descripcion: "Esta es la description del problema que se nos presentó",
      fechaIssue: "2018/05/23",
      fechaResponse: this.fechaActual,
      titulo: "Problema Planteado",
      id: "",
      idIssue: ""
    }
  }

  enviar() {
    console.log(this.response)
  }

}
