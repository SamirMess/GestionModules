import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeDemandesComponent } from './liste-demandes/liste-demandes.component';
import { NouvelleDemandeComponent } from './nouvelle-demande/nouvelle-demande.component';

const routes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'nouvelleDemande', component: NouvelleDemandeComponent},
  { path: 'listeDemandes', component: ListeDemandesComponent},
  { path: '',          redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
