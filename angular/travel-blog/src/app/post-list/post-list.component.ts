import { Component, OnInit } from '@angular/core';
import { post } from '../post.model';
import { postService } from '../post.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  listOfPosts: post[ ]=[];
  constructor(private postService: postService) {}

  ngOnInit(): void {
    this.listOfPosts= this.postService.getPosts();
    this.postService.listChangedEvent.subscribe((listOfPosts : post[]) =>{
      this.listOfPosts = this.postService.getPosts();
    
    });
    
    
  }
}