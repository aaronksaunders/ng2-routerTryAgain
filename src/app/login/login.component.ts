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

    constructor(private fb: FormBuilder, private authService: AuthenticationService,
                private router: Router) {

        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });


    }

    ngOnInit() {
    }


    login() {

        const formValue = this.form.value;

        this.authService.login(formValue.email, formValue.password)
            .first()
            .subscribe(
                () => {
                    if (this.authService.isLoggedIn) {
                        // Get the redirect URL from our auth service
                        // If no redirect has been set, use the default
                        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
                        // Redirect the user
                        this.router.navigate([redirect]);
                    }
                },
            )

        return false;
    }

}