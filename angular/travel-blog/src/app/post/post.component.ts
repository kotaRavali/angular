import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { post } from '../post.model';
import { postService } from "../post.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post?:post;
  @Input() index : number =0;

  constructor( private postService: postService, private router: Router) { }

  
  ngOnInit(): void {
    console.log(this.post );
    console.log(this.index);
  }
  onDelete(){
    console.log("in post delete method");
    this.postService.deletePost(this.index);
  }
  onEdit(){
    console.log("inside on edit");
    this.router.navigate(['/post-edit', this.index]);
  }
  likePost(){
    this.postService.likePost(this.index);
  }


}
