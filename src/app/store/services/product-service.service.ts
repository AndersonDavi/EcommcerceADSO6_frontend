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
        return productos.map((producto) => {
          if (producto.nom_producto === null) {
            producto.nom_producto = '';
          }
          return producto;
        });
      }),

      map((productos) =>
        // productos.sort((a, b) => a.nom_producto.localeCompare(b.nom_producto))
        productos.sort(() => Math.random() - 0.5)
      )
    );
  }

  getProdutoByID(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/producto/${id}`).pipe(
      map((producto) => {
        console.log('Producto obtenido:', producto);
        return producto;
      })
    );
  }

  crearProducto(producto: Producto) {
    return this.http.post<Producto>(`${this.baseUrl}/productos`, producto).pipe(
      map((producto) => {
        console.log('Producto creado:', producto);
        return producto;
      })
    );
  }
}
