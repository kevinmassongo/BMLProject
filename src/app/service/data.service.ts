import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API = 'https://666a62dc7013419182cf1451.mockapi.io/users'

  private http = inject(HttpClient)
  

  getPosts() {
    return this.http.get<Post[]>(`${this.API}`)
  }

  constructor() { }
}
