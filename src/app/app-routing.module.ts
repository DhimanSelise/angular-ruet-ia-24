import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }, 
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
