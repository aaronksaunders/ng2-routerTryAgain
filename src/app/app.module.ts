import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TryAgainRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {HomeDataResolver} from "./shared/homeData.resolver";
import {LoginComponent} from './login/login.component';
import {AuthGuard} from "./shared/auth.guard";
import {AuthenticationService} from "./shared/auth.service";
import {HomeItemComponent} from './home-item/home-item.component';

import { MaterialModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        HomeItemComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        TryAgainRoutingModule,
        MaterialModule.forRoot()
    ],
    providers: [
        HomeDataResolver,
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
