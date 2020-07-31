 
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BrowseComponent } from './browse/browse.component';
import { DownloadedComponent } from './downloaded/downloaded.component';
import { LikedComponent } from './liked/liked.component';
import { StreamsComponent } from './streams/streams.component';
import { PodcastComponent } from './podcast/podcast.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, children:[
      { path: 'browse', component: BrowseComponent },
      { path: 'downloaded', component: DownloadedComponent },
      { path: 'liked', component: LikedComponent },
      { path: 'streams', component: StreamsComponent },
      { path: 'podcast/:id', component: PodcastComponent },
      { path: 'feed/:id', component: FeedComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }