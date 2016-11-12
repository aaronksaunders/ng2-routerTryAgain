import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeDataList

  constructor(private _route :ActivatedRoute) {
    _route.data
        .do(d => console.log("hello",d))
        .subscribe(
        data => this.homeDataList = data['homeData']
    );
  }

  ngOnInit() {
  }

}
