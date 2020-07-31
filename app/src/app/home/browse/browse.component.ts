import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/shared/constants/podcast-categories';
import { FeedService } from 'src/app/_services/feed.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  categories = categories 
  topPodcasts = []

  constructor(private feedService: FeedService) { 

  }

  ngOnInit(): void {
    this.feedService.getTop('us', '26', 50).subscribe((data)=>{
      this.topPodcasts = data['feed']['entry'];
    }, err =>{
      console.log(err)
    })
  }

}
