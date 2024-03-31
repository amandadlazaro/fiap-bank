import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


import { SaqueComponent } from '../saque/saque.component';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    SaqueComponent,
    HttpClientModule,
  ],
  providers: [
    HomeService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public saldo = 0;
  constructor(
    private service: HomeService,
    private _snackBar: MatSnackBar
  ) { }
  public ngOnInit(): void {
    this.getSaldo();
  }

  public getSaldo() {
    this.service.getSaldo()
    .subscribe(response => {
      this.saldo = response;
    }, (erro) => {
      const erroMessage = `Ops, ocorreu um erro ao consultar o seu saldo. ${erro}`
      this._snackBar.open(erroMessage, '', {horizontalPosition: 'end', verticalPosition: 'top'});
    });
  }



}
