import { Injectable } from '@angular/core';
import { environments } from '../../../environments/envirenments';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos`).pipe(
      map((productos) => {
        console.log('Productos obtenidos:', productos);
        return productos;
      }),
      map((productos) => {
        // Operador map para transformar datos
        return productos.map((producto) => {
          if (producto.nom_producto === null) {
            producto.nom_producto = ''; // o cualquier otro valor predeterminado que desees
          }
          return producto;
        });
      }),
      // para ver en la consola los mensajes de log
      map((productos) =>
        productos.sort((a, b) => a.nom_producto.localeCompare(b.nom_producto))
      )
    );
  }
}
