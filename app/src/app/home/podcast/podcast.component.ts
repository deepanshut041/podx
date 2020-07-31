import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/_services/feed.service';
import { ActivatedRoute } from '@angular/router';
import * as parsePodcast from 'node-podcast-parser';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  public podcast_id:string;
  public loading = true;

  public title: string;
	public author: String;
	public description: String;
	public image: String;
	public updated: String;
	public website: String;
	public email: String;
	public episodes: any[];
	public allEpisodes: any[];
	public sortBy: string = "asc";
	public latestEpisode: any;
	public playedEpisodes: string[];
	public offlineEpisodes: string[];
	public query: string = "";
	public favs: string[];


  constructor(private feedService: FeedService, private route: ActivatedRoute) {
    this.podcast_id = this.route.snapshot.paramMap.get('id')

   }

  ngOnInit(): void {
    this.feedService.getRssFeed(this.podcast_id).subscribe(
      (podcast) => {
        this.getRss(podcast["feedUrl"])
      }, (err) => {
        console.log(err)
      }
    )   
  }

  getRss(feedUrl){
    this.feedService.getPodcastFeed(feedUrl).subscribe((resp) =>{
      parsePodcast(resp, (error, data)=>{
        if (error) {
					console.log(error);
				} else {
					this.title = data.title;
					this.author = data.author;
					this.description = data.description.long;
					this.image = data.image;
					this.updated = data.updated;
					this.website = data.link;
					this.email = data.owner.email;
					this.episodes = data.episodes;
					this.allEpisodes = this.episodes.map(x => Object.assign({}, x));
          this.latestEpisode = this.episodes[0];
          this.loading = false
				}
      })
    })
  }

}
