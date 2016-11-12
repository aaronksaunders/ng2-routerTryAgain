import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../shared/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeDataList

  constructor(private _route :ActivatedRoute, private _authService: AuthenticationService) {
    _route.data
        .do(d => console.log("hello",d))
        .subscribe(
            data => {
              return this.homeDataList = data['homeData'];
            }
    );
  }

  ngOnInit() {
  }

  logout() {
    this._authService.logout()
  }

}
