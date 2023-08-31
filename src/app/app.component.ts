import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listar', url: '/lista-de-usuarios', icon: 'list' },
    { title: 'Editar', url: '/editar-usuario', icon: 'pencil' },
  ];
  public labels = [];
  async ngOnInit() {
    await this.storage.create();
  }
  constructor(private storage: Storage) {}
}
