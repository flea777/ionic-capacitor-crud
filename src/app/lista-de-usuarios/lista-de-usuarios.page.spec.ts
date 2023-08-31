import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeUsuariosPage } from './lista-de-usuarios.page';

describe('ListaDeUsuariosPage', () => {
  let component: ListaDeUsuariosPage;
  let fixture: ComponentFixture<ListaDeUsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaDeUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
