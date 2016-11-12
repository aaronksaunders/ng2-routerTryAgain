import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Router} from "@angular/router";


export interface AuthUser {
    username?: string;
    email?: string;
    id?: string
}

@Injectable()
export class AuthenticationService {


    CURRENT_USER: AuthUser = {
        username: null,
        email: null,
        id: null
    };
    redirectUrl = ""

    constructor(private  _router: Router) {

        var user = localStorage.getItem("USER");
        if ( user ) {
            let object = JSON.parse(user);
            this.CURRENT_USER = object;
        }

    }

    login(email, password): Observable<AuthUser> {

        console.log("in AuthenticationService");

        if (email === "aaronksaunders@gmail.com" && password !== '') {
            this.CURRENT_USER = {
                username: "aaronksaunders",
                email: "aaronksaunders@gmail.com",
                id: "1234567"
            }

            localStorage.setItem("USER",JSON.stringify(this.CURRENT_USER))
        }
        return Observable.create(observer => {
            observer.next(this.CURRENT_USER);
            observer.complete()
        })

    }

    logout() {
        this.CURRENT_USER = {};
        this._router.navigate(['/login']);
        localStorage.clear();
    }

    isLoggedIn(): boolean {

        console.log("in AuthenticationService: isLoggedIn");

        return  (this.CURRENT_USER.id ? true : false);

    }

}
