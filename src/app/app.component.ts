import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltroUsuariosPipe } from './filtro-usuarios.pipe';
import { FormsModule } from '@angular/forms';

interface iUsuario {
  id: number;
  nome: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    SlicePipe,
    CommonModule,
    FiltroUsuariosPipe,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-pipes';

  mensagem = 'Olá, mundo! estamos testando os pipes do Angular';

  aniversario = new Date();

  valorPastel = 8.5;

  pessoas = ['João', 'Maria', 'José', 'Pedro', 'Ana', 'Carlos'];

  termoPesquisa = '';
  usuarios = [
    {
      id: 1,
      nome: 'João',
      email: 'joao@gmail.com',
    },
    {
      id: 2,
      nome: 'Maria',
      email: 'maria@gmail.com',
    },
    {
      id: 3,
      nome: 'Josefa',
      email: 'josefa@gmail.com',
    },
    {
      id: 4,
      nome: 'Ana',
      email: 'ana@gmail.com',
    },
  ];
}
