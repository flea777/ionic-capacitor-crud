import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeUsuariosPageRoutingModule } from './lista-de-usuarios-routing.module';

import { ListaDeUsuariosPage } from './lista-de-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeUsuariosPageRoutingModule
  ],
  declarations: [ListaDeUsuariosPage]
})
export class ListaDeUsuariosPageModule {}
