import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post/post.service';


class Post {

}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  posts: Post[];
  constructor(private postService: PostService) {
    postService.getAllPosts() .subscribe(value => this.posts = value);

  }

  ngOnInit(): void {
  }

}

