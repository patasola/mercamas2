import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.scss']
})
export class RegistroProductosComponent implements OnInit {

  public formProductos: FormGroup = new FormGroup({});
  public productoEditar: ProductoModel | null = null;

  constructor(private formBuilder: FormBuilder, private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    const editar = localStorage.getItem('productoEditar')
    this.productoEditar = editar ? JSON.parse(editar) : null;
    this.buildForm();
  }

  private buildForm(){
      this.formProductos = this.formBuilder.group({
      nombre: [this.productoEditar?.nombre, Validators.required],
      cantidad: [this.productoEditar?.cantidad, Validators.required],
      categoria: [this.productoEditar?.categoria, Validators.required],
      descripcion: [this.productoEditar?.descripcion, Validators.required],
      foto: [this.productoEditar?.foto, Validators.required],
      valor: [this.productoEditar?.valor, Validators.required]
    });
  }

  public agregarProducto(){
    console.log(this.formProductos.value);
    this.productosService.agregarProducto(this.formProductos.value).then(response => {
      alert('Producto creado correctamente')
      this.router.navigate(['/productos']);
    }).catch(error =>{
      this.router.navigate(['/error']);
    })
  }

  public actualizarProducto(){
    const producto: ProductoModel = {
      id: this.productoEditar?.id,
      ...this.formProductos.value
    }
    this.productosService.actualizarProducto(producto).then(response => {
      if(response.message === 'updated')
        alert('Producto actualizado correctamente');
        this.router.navigate(['/productos']);
    }).catch(error => {
      this.router.navigate(['/error']);
    });
  }
}
