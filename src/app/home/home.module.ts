import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FeedService } from '../_services/feed.service';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, SharedModule, HttpClientModule, HomeRoutingModule
  ],
  providers: [FeedService]
})
export class HomeModule { }
