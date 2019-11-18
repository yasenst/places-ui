import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlacesComponent} from './components/places/places.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'places/:location/:category',
    component: PlacesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
