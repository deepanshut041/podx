import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FeedService {

  requestOptions: Object = {
    observe: "body",
    responseType: "text",
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "Origin, Content-Type"
    })
  };

  constructor(private http: HttpClient) {

  }

  getTop(region: string, category: string, amount: number): Observable<any> {
		return this.http.get(`https://itunes.apple.com/${region}/rss/topaudiopodcasts/limit=${amount}/genre=${category}/json`);
	}

  getRssFeed(id: string): Observable<any> {
    return this.http.get(`https://itunes.apple.com/lookup?id=${id}&callback=`).pipe(
      map(data => data['results'][0] )
    );
  }

  getPodcastFeed(rss: string): Observable<any> {
    return this.http.get(rss, this.requestOptions)
  }

}
