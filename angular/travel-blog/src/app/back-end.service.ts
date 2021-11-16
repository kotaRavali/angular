import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { post } from "./post.model";
import { postService } from "./post.service";
import { tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class BackEndService{
    

    constructor(private postService: postService, private http: HttpClient){

    }

    //Function 1 -- Save
    // https://live-post-180f2-default-rtdb.firebaseio.com/
    saveData(){
        //get list of Posts from PostService
        const listOfPost: post [] = this.postService.getPosts();

        //sending list of Posts to backend DB
        this.http.put('https://live-post-180f2-default-rtdb.firebaseio.com/posts.json', 
        listOfPost).subscribe((res) => {
            console.log(res);
        });
    }

    //Function 2 -- Fetch

    fetchdata(){
        this.http.get<post[]>('https://live-post-180f2-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            tap((listOfPost : post[]) => {
            console.log(listOfPost);
            this.postService.setPosts(listOfPost);
        })).subscribe();
    }
}