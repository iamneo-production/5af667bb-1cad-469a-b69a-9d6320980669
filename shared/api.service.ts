import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  //now here i will define the post ,get,put ,delete 0
  //create cards using post method
  postHr(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //Get hr data using get method
  getHr(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }
  //Update hr using put method
  updateHr(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteHr(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  //this is done.
}
