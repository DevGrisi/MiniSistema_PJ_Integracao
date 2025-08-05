import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa o módulo comum que contém *ngFor

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  itensCadastrados: any[] = [];

  ngOnInit(): void {
    const dados = localStorage.getItem('itens');
    this.itensCadastrados = dados ? JSON.parse(dados) : [];
  }
}
