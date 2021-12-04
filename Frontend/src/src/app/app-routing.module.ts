import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistroProductosComponent } from './components/registro-productos/registro-productos.component';

const routes: Routes = [
  {path: 'productos', component: TablaProductosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'iniciar sesion', component: IniciarSesionComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'formulario-producto', component: RegistroProductosComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', component: InicioComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
