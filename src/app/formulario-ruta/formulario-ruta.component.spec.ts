import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRutaComponent } from './formulario-ruta.component';

describe('FormularioRutaComponent', () => {
  let component: FormularioRutaComponent;
  let fixture: ComponentFixture<FormularioRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
