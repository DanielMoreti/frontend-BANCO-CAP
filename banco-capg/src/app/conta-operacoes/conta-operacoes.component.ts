import { Component, OnInit } from '@angular/core';
import { ContaOperacoesService } from '../services/conta-operacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ContaCorrenteModel {
  idContaConrrente: Number;
  codigoBanco: String;
  agencia: String;
  tipoDeConta: String;
  numeroDaConta: String;
  digitoVerificador: String;
  saldoDaConta: Number;
}

@Component({
  selector: 'app-conta-operacoes',
  templateUrl: './conta-operacoes.component.html',
  styleUrls: ['./conta-operacoes.component.css']
})
export class ContaOperacoesComponent implements OnInit {

  public contaCorrente: ContaCorrenteModel = {} as ContaCorrenteModel;

  public acaoDescricao: string = "Buscar Conta";

  public acaoBotao: string = "Consultar";

  public valorOperacao: Number;

  constructor(private _contaOperacoesService: ContaOperacoesService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public buscarSaldoCanta(): void {
    this._contaOperacoesService.buscarConta(this.contaCorrente)
      .subscribe(el => {
        if (el) {
          this.contaCorrente = el;
          this.openSnackBar('Conta encontrada', 'Fechar');
        } else {
          this.openSnackBar('Conta não encontrada', 'Fechar');
        }
      }, () => this.openSnackBar('Ocorreu um erro na operação', 'Fechar'));
  }


  private openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action);
  }

  public resetarPesquisa(): void {
    this.contaCorrente = {} as ContaCorrenteModel;
    this.valorOperacao = null;
  }

  public realizarSaqueConta(): void {
    this._contaOperacoesService.realizarSaqueConta(this.controiObjetoDeOperacoes())
      .subscribe(el => {
        this.openSnackBar('Operação realizada com sucesso', 'Fechar');
        this.contaCorrente = el;
      }, () => this.openSnackBar('Ocorreu um erro na operação', 'Fechar'));
  }

  public realizarDepositoConta(): void {
    this._contaOperacoesService.realizarDepositoConta(this.controiObjetoDeOperacoes())
      .subscribe(el => {
        this.openSnackBar('Operação realizada com sucesso', 'Fechar');
        this.contaCorrente = el;
      }, () => this.openSnackBar('Ocorreu um erro na operação', 'Fechar'));
  }

  private controiObjetoDeOperacoes(): ContaCorrenteModel {
    let objetoConta: ContaCorrenteModel = Object.assign({}, this.contaCorrente);
    objetoConta.saldoDaConta = this.valorOperacao;

    return objetoConta;
  }

}
