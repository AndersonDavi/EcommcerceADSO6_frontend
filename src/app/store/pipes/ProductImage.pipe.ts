import { Pipe, type PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/Producto';

@Pipe({
  name: 'productoImage',
  standalone: true,
})
export class productoImagePipe implements PipeTransform {
  transform(producto: Producto): string {
    if (!producto.img_url) {
      return 'https://m.media-amazon.com/images/I/81whTB488bL._AC_AA180_.jpg';
    }
    if (producto.img_url) return producto.img_url;
    return producto.img_url;
  }
}
