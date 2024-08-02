import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TittleComponent } from './tittle/tittle.component';
import { MainDetalleComponent } from './main-detalle/main-detalle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: MainDetalleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
