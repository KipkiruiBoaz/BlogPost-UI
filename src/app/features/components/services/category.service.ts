import { Injectable } from '@angular/core';
import { addCategoryRequest } from '../models/addCategoryRequest';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { category } from '../models/categories.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/updateCategoryRequest';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  addCategory(model:addCategoryRequest) :Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories`,model)
  }
  getAllCategories():Observable<category[]>{
    return this.http.get<category[]>(`${environment.apiBaseUrl}/api/Categories`)
  }
  getCategory(id:string):Observable<category>{
    return this.http.get<category>(`${environment.apiBaseUrl}/api/Categories/${id}`)
  }
  updateCategory(id:string,updateCategoryRequest:UpdateCategoryRequest):
  Observable<category>{
     return this.http.put<category>(`${environment.apiBaseUrl}/api/Categories/${id}`,updateCategoryRequest);
  }

}
