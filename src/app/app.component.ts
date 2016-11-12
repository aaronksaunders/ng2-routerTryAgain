import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  routeName;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _ngZone: NgZone) {

  }

  ngOnInit() {
    this.router.events.subscribe((url) => {
      this._ngZone.run(() => {
        console.log(url.url);
        this.routeName = url.url;
      });

    });
  }
}
