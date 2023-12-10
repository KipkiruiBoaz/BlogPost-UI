import { Injectable } from '@angular/core';
import { AddBlogPostRequest } from '../models/add-blogpost-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { blogpost } from '../models/blogpost.model';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private http:HttpClient) { }
  addBlogpost(model:AddBlogPostRequest) :Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Blogposts`,model )
  }
  getAllBlogposts():Observable<blogpost[]>{
    return this.http.get<blogpost[]>(`${environment.apiBaseUrl}/api/Blogposts`)
  }
  getBlogpostById(id:string):Observable<blogpost>{
    return this.http.get<blogpost>(`${environment.apiBaseUrl}/api/Blogposts/{id}`);
  }
}
