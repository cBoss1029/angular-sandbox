import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { CharacterDetailsComponent } from '../components/character-details/character-details.component';

const routes: Routes = [
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: '', component: HomeComponentComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }