import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: "pageNotFound",
    pathMatch: 'full'
  },
  {
    path:"home",
    component:AppComponent
  },
  {
    path:'pageNotFound',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
