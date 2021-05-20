/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContaOperacoesService } from './conta-operacoes.service';

describe('Service: ContaOperacoes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContaOperacoesService]
    });
  });

  it('should ...', inject([ContaOperacoesService], (service: ContaOperacoesService) => {
    expect(service).toBeTruthy();
  }));
});
