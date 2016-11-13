import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from "@angular/forms";
import {AuthenticationService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private _authService: AuthenticationService,
                private _router: Router) {

        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });


    }

    ngOnInit() {
    }


    login() {

        const formValue = this.form.value;

        this._authService.login(formValue.email, formValue.password)
            .first()
            .subscribe(
                () => {
                    if (this._authService.isLoggedIn) {
                        // Get the redirect URL from our auth service
                        // If no redirect has been set, use the default
                        let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/home';
                        // Redirect the user
                        this._router.navigate([redirect]);
                    }
                },
            )

        return false;
    }

}