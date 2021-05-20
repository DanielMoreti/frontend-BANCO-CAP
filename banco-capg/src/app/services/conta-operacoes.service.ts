import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContaCorrenteModel } from '../conta-operacoes/conta-operacoes.component';

@Injectable()
export class ContaOperacoesService {

  constructor(private http: HttpClient) { }

  buscarConta(conta: ContaCorrenteModel): Observable<any> {
    return this.http.post("http://localhost:8080/conta/verificarSaldo",
      conta);
  }

  realizarSaqueConta(conta: ContaCorrenteModel): Observable<any> {
    return this.http.put("http://localhost:8080/conta/realizarSaque",
      conta);
  }

  realizarDepositoConta(conta: ContaCorrenteModel): Observable<any> {
    return this.http.put("http://localhost:8080/conta/realizarDeposito",
      conta);
  }

}
