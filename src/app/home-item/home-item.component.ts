import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {

  @Input() homeItem;
  @Output() showMore = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  doMoreInfo() {
    console.log("doMoreInfo", this.homeItem)
    this.showMore.emit(this.homeItem)

  }

}
