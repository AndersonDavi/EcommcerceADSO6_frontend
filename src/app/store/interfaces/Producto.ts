export interface Producto {
  id_producto: number;
  nom_producto: string;
  desc_producto: string;
  marca_producto: string;
  modelo_producto: string;
  val_producto: number;
  fec_creado: string;
  img_url: string | null;
  creado_por: number;
}
