import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { ContaOperacoesModule } from './conta-operacoes/conta-operacoes.module';
import { ContaOperacoesService } from './services/conta-operacoes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    ContaOperacoesModule,
    HttpClientModule
  ],
  providers: [ContaOperacoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
