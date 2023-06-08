import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "http://localhost:3000/users";
  constructor(private postDetail: HttpClient) { }

  getPostDetails(){
    return this.postDetail.get(this.url);
  }

  sendPostDetails(data:any){

    return this.postDetail.post(this.url, data);

  }

}
