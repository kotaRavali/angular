import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { post } from '../post.model';
import { postService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;

  constructor(
    private postService: postService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagepath  = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagepath = post.imagepath;

        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [
        Validators.required,
        Validators.maxLength(25),
      ]),
      description: new FormControl(description, [Validators.required]),
      imagepath: new FormControl(imagepath, [Validators.required]),
    });
  }

  onSubmit() {
    console.log('in side the onSubmit call');
    console.log(this.form);
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagepath = this.form.value.imagepath;

    //preparing object
    const Post: post = new post(
      title,
      description,
      imagepath,
      'javafsd@gmail.com',
      new Date(),
      0
    );

    if (this.editMode) {
      this.postService.updatePost(this.index, Post);
    } else {
      this.postService.addPost(Post);
    }

    // Navigate to post-list after successfully sumbitting post
    this.router.navigate(['/post-list']);
  }
}