import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FeedService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }

  getFeeds(term = "news") {
    return this.http
    .get(`https://itunes.apple.com/search?media=podcast&term=${term}`, this.httpOptions)
  }

  


}
