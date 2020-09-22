import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post/post.service';

class Post {
}

@Component({
  selector: 'app-fullpost',
  templateUrl: './fullpost.component.html',
  styleUrls: ['./fullpost.component.css']
})
export class FullpostComponent implements OnInit {
  singlePost: Post;

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) {

    this.activatedRoute.params.subscribe(value =>
      {
        this.postService.getSinglePost(value.id).subscribe(data => this.singlePost = data);
      }
    );
  }

  ngOnInit(): void {
  }

}
