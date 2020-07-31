import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FeedService } from '../_services/feed.service';
import { BrowseComponent } from './browse/browse.component';
import { StreamsComponent } from './streams/streams.component';
import { DownloadedComponent } from './downloaded/downloaded.component';
import { LikedComponent } from './liked/liked.component';
import { PodcastComponent } from './podcast/podcast.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  declarations: [HomeComponent, BrowseComponent, StreamsComponent, DownloadedComponent, LikedComponent, PodcastComponent, FeedComponent],
  imports: [
    CommonModule, SharedModule, HttpClientModule, HomeRoutingModule
  ],
  providers: [FeedService]
})
export class HomeModule { }
