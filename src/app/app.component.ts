import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DoeTambemComponent } from './Components/doe-tambem/doe-tambem.component';
import { HomeComponent } from './Components/home/home.component';
import { QuemSomosComponent } from './Components/quem-somos/quem-somos.component';
import { ContatoComponent } from './Components/contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,HomeComponent,DoeTambemComponent,QuemSomosComponent,ContatoComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiniSistema_PJ_Integracao';
}
