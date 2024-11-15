import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstilosHermanosDirective } from './estilos-hermanos.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    HermanoComponent,
    EstilosHermanosDirective,
    MiPipePersonalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
