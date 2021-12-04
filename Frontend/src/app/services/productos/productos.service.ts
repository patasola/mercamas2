import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductoModel } from 'src/app/models/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  public obtenerProductos(): Promise<any>{
    console.log('Entra al servicio')
    const url = `${environment.apiUrl}/obtenerProductos`;
    return this.http.get(url).toPromise();
    }

  public obtenerProducto(id: number){  }

  public agregarProducto(producto: any): Promise<any>{
    const url =  `${environment.apiUrl}/agregarProducto`;
    return this.http.post(url, producto).toPromise();
}

  public actualizarProducto(producto: ProductoModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarProducto/${producto.id}`
    return this.http.put(url, producto).toPromise();
    }

  public eliminarProducto(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/eliminarProducto/${id}`).toPromise();
  }

}
