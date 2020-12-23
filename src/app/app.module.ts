import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InformacionComponent } from './informacion/informacion.component';
import { NoticiasComponent } from './noticias/noticias.component';
import {QuicklinkModule} from 'ngx-quicklink';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
