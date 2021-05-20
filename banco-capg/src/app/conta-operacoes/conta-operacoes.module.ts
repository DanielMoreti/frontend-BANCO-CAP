import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ContaOperacoesComponent } from './conta-operacoes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  declarations: [ContaOperacoesComponent],
  exports: [ContaOperacoesComponent],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class ContaOperacoesModule { }
