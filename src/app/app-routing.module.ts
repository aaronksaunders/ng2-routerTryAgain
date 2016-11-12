import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import {HomeComponent} from "./home/home.component";
import {HomeDataResolver} from "./shared/homeData.resolver";

const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent,
    resolve : {
      homeData : HomeDataResolver
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TryAgainRoutingModule { }
