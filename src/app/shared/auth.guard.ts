import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private authService: AuthenticationService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {

        this.authService.redirectUrl =  state.url;


        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false
        } else {
            console.log("state.url", this.authService.redirectUrl);
            return true
        }

    }

}