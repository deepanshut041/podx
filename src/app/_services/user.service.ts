import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PrefStorageService } from './pref-storage.service';
import { map } from 'rxjs/operators';
import { UserProfile } from '../_dtos/user/UserProfile';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private storage: PrefStorageService) {
  }

  fetchProfile(): Observable<UserProfile> {
    return this.httpClient.get(`${environment.DOMAIN}/api/user/me`, this.httpOptions)
      .pipe(map((user: UserProfile) => {
        this.storage.saveUser(user)
        return user
      }))
  }

  getProfile(): UserProfile {
    return this.storage.getUser()
  }

  logout(): void {
    this.storage.signOut()
    window.location.reload();
  }
}