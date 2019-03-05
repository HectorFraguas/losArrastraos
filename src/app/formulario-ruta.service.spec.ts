import { TestBed } from '@angular/core/testing';

import { FormularioRutaService } from './formulario-ruta.service';

describe('FormularioRutaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioRutaService = TestBed.get(FormularioRutaService);
    expect(service).toBeTruthy();
  });
});
