import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  constructor( private http: HttpClient) {
    //se dispara cuando se recarga la página
    console.log('Servicio listo')
    //con este servicio hacer peticiones get, post a servidores rest, etc
    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp=>{
      console.log(resp);
    })
   }
}
