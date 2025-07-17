import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DoeTambemComponent } from './Components/doe-tambem/doe-tambem.component';
import { QuemSomosComponent } from './Components/quem-somos/quem-somos.component';
import { ContatoComponent } from './Components/contato/contato.component';
import { NaoEncontradoComponent } from './Components/nao-encontrado/nao-encontrado.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},                   //ROTA principal
    {path: 'home', component: HomeComponent},               //ROTA do componente Home
    {path: 'doe-tambem', component: DoeTambemComponent},    //ROTA do componente DoeTambem
    {path: 'quem-somos', component: QuemSomosComponent},         //ROTA do componente Artigos
    {path: 'contato', component: ContatoComponent},         //ROTA do componente Contato
    {path: '**', component: NaoEncontradoComponent}         //ROTA para redirecionar quando alguma página não foi encontrada
    //       |
    //       V
    //   Indentifica se o usuário ta fazendo bosta (indo em alguma página que não tem (burrão))
];
