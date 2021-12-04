import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroProductosComponent } from './components/registro-productos/registro-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './services/productos/productos.service';
import { ErrorComponent } from './components/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaProductosComponent,
    NotFoundComponent,
    RegistroComponent,
    CarritoComponent,
    IniciarSesionComponent,
    InicioComponent,
    RegistroProductosComponent,
    EditarProductoComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
