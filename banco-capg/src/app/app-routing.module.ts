import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaOperacoesComponent } from './conta-operacoes/conta-operacoes.component';


const routes: Routes = [
  { path: "", redirectTo: "/conta-operacoes", pathMatch: "full" },
  { path: 'conta-operacoes', component: ContaOperacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
