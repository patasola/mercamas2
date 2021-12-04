import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  public obtenerProductos(): Promise<any>{
    const url = '${environment.apiUrl}/obtenerProductos'
    return this.http.get(url).toPromise();
    }
  public obtenerProducto(id: number){  }
  public agregarProducto(producto: any){  }
  public actualizarProducto(producto: any, id: number){  }
  
  public eliminarProducto(id: number): Promise<any>{
    return this.http.delete('${environment.apiUrl}/eliminarProducto/${id}').toPromise();
  }

}
