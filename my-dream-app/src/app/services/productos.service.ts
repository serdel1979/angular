import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: any = [];
  constructor(private http: HttpClient) {
    //se dispara cuando se recarga la página
    //con este servicio hacer peticiones get, post a servidores rest, etc
    this.cargarInfo()
  }

  private cargarInfo(){
    this.http.get('https://angular-html-62610-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe(resp => {

        this.productos = resp;
        console.log(this.productos)
      })
  }


}
