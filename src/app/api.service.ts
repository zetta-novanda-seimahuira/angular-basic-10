import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  readonly  ROOT_URL = 'https://jsonplaceholder.typicode.com/';

 public get(url: any): Observable<any> {
  return this.http.get(this.ROOT_URL + url).pipe(map(res => res));
}

public getId(id: number): Observable<any> {
  return this.http.get(this.ROOT_URL + 'posts/' + id).pipe(map(res => res));
}

addPost(data: Post): Observable<any> {
  return this.http.post(this.ROOT_URL + 'posts', data)
}

update(id: any, data: any): Observable<any> {
  return this.http.put(this.ROOT_URL + 'posts/' + id, data);
}


  // public addPost(data: any){
  //  return this.http.post(this.ROOT_URL + '/posts', data)
  // } 

  // getAllPlaylist() {
  //   return this.http.get(`url`).pipe(map((res) => res.json()));
  // }

  // getDataId(id:number) {
  //   return this.http.get(this.ROOT_URL + '/posts' + id).pipe(map((res) => res.json()));
  // }


 // public getPostId(id:number) {
    // return this.dataPost.find(pos=> pos.id == id)
 // }
}
