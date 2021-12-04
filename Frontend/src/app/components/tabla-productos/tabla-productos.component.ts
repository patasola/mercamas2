import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {

  public productos: ProductoModel[]= [];

  constructor(private ProductosService: ProductosService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    localStorage.clear();
    this.productos = await this.obtenerProductos();
  }

  public async obtenerProductos(): Promise<any>{
    try{
    const response = await this.ProductosService.obtenerProductos();
    return response.datos;
    }catch(error){
      this.router.navigate(['/error']);
    }
  }

  public eliminarProducto(id:number){
    this.ProductosService.eliminarProducto(id).then(async response => {
      if(response.message === 'delete'){
        this.productos = await this.obtenerProductos();
        alert('Producto eliminado correctamente');
      }
    }).catch(error => {
      console.log(error);
    })
  }

  public editarProducto(producto: ProductoModel){
    localStorage.setItem('productoEditar', JSON.stringify(producto));
    this.router.navigate(['/formulario-producto'])
  }
}
