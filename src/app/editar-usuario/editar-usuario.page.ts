import { AppStorageService } from './../services/app-storage.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario-model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {
  value: any = '';
  usuario = new Usuario('', '', '', '');
  usuarioExcluir = new Usuario('', '', '', '');

  constructor(private appStorageService: AppStorageService) {}

  ngOnInit() {}

  async setValue() {
    await this.appStorageService.set(this.usuario.cpf, this.usuario);
    this.usuario = { cpf: '', nome: '', dataNascimento: '', bairro: '' };
  }

  async deleteValue() {
    await this.appStorageService.remove(this.usuarioExcluir.cpf);
    this.usuarioExcluir = { cpf: '', nome: '', dataNascimento: '', bairro: '' };
  }
}
