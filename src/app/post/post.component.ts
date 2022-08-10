import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { SingleResult } from '../Single-Result';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:SingleResult = {} as SingleResult;
  constructor(private postService:PostService) { }

  ngOnInit(): void
   {
    this.postService.getPost().subscribe((response:SingleResult) =>
    {
       this.post = response;
    });
  }

  
}
