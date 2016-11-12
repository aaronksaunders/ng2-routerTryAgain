import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from "./home/home.component";
import {HomeDataResolver} from "./shared/homeData.resolver";
import {LoginComponent} from "./login/login.component";

import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'home', component: HomeComponent,
        canActivate: [AuthGuard],
        resolve: {
            homeData: HomeDataResolver
        },
    },
    {
        path: '**',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class TryAgainRoutingModule {
}
