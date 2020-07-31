import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/_services/feed.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  podcasts = []
  categoryId: string
  category_name = "Arts"

  constructor( private feedService: FeedService, private route: ActivatedRoute) {
    this.categoryId = this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.feedService.getTop('us', this.categoryId, 50).subscribe((data)=>{
      this.podcasts = data['feed']['entry'];
    }, err =>{
      console.log(err)
    })
  }

}
