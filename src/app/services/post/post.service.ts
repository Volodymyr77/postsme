import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class Post {
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return  this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getSinglePost(id):Observable<Post> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/${id}');
  }
}
