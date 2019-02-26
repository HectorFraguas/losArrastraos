import { TestBed } from '@angular/core/testing';

import { FormularioMiembrosService } from './formulario-miembros.service';

describe('FormularioMiembrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioMiembrosService = TestBed.get(FormularioMiembrosService);
    expect(service).toBeTruthy();
  });
});
