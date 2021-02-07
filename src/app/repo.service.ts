import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  _URL = 'https://api.github.com/users/';
  token = '?8b9e17143d094a525a75e0d0637d4f7691770cb4';

  constructor(public http: HttpClient) { }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
}
