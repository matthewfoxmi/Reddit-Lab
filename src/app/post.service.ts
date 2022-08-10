import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl:string = "https://www.reddit.com/r/aww/.json";

  constructor(private http: HttpClient) { }

  getPost():any 
  {
    return this.http.get(this.apiUrl);
  }
}
