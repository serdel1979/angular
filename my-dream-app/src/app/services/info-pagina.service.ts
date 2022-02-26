import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any = [];

  constructor(private http: HttpClient) {
    //se dispara cuando se recarga la página
    //con este servicio hacer peticiones get, post a servidores rest, etc
    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp.nombre_corto)
        console.log(resp.twitter);

      })
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-62610-default-rtdb.firebaseio.com/equipo.json')
      .subscribe(resp => {

        this.equipo = resp;
        console.log(this.equipo);

      })
  }



}
