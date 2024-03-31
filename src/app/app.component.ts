import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:  [
    { provide: LOCALE_ID, useValue: 'pt' },
    // *************************************************
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
    // 
})
export class AppComponent {
  title = 'fiap-bank';
}
