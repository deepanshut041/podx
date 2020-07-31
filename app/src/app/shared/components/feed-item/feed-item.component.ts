import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input()
  podcast: string;

  constructor() { }

  ngOnInit(): void {
  }

  getInfo(): void {
    
  }
}
