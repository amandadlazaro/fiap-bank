import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MovimentacaoService } from './services/movimentacao.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    HttpClientModule,
  ],
  providers: [MovimentacaoService],
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.css'
})
export class SaqueComponent {
  public valorFormControl = new FormControl('', [Validators.required]);
  public tipoMovimentacao = '';
  public config: MatSnackBarConfig = { horizontalPosition: 'end', verticalPosition: 'top' };
  @Output() public recarregar = new EventEmitter();

  constructor(
    private service: MovimentacaoService,
    private _snackBar: MatSnackBar
  ) { }


  public validarValor() {
    this.tipoMovimentacao === 'saque' ? this.saque() : this.deposito();

  }

  public deposito() {
    this.service.postDeposito(this.valorFormControl.value)
      .subscribe(() => {
        this.limpaForms();
        this._snackBar.open('Depósito realizado com sucesso', '', this.config)
      }, (erro) => this._snackBar.open(`Erro ao realizar deposito, ${erro}`, '', this.config));

  }

  public saque() {
    this.service.putSaque(this.valorFormControl.value)
      .subscribe(() => {
        this.limpaForms();
        this._snackBar.open('Saque realizado com sucesso', '', this.config)
      }, (erro) => this._snackBar.open(`Erro ao realizar saque, ${erro}`, '', this.config));

  }

  public limpaForms() {
    this.valorFormControl.setValue('');
    this.tipoMovimentacao = '';
    this.recarregar.emit(true);
  }

}
