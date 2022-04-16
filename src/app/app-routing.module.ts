import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleCardComponent} from "./components/single-card/single-card.component";
import {CardsComponent} from "./components/cards/cards.component";

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: SingleCardComponent
  },
  {
    path: '',
    component: CardsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
