import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  private jsonUrl = 'https://jsonplaceholder.typicode.com/users';

  public sendGetRequest() {
    return this.http.get(this.jsonUrl);
  }
}
