import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario-model';
import { AppStorageService } from '../services/app-storage.service';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.page.html',
  styleUrls: ['./lista-de-usuarios.page.scss'],
})
export class ListaDeUsuariosPage  implements OnInit{
  usuarios: Usuario[] = [];

  private _storage: Storage | null = null;

  constructor(private appStorageService: AppStorageService) { }
  ngOnInit(): void {
   this.print();
  }
  
  async print() {
    const usuariosStorage = await this.appStorageService.list();
       this.usuarios = usuariosStorage
  }
}
