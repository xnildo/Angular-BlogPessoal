import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient ) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  // pegar todas postagens
  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blogdozen.herokuapp.com/postagens')

  }

  getByIdPostagem(id: number):Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogdozen.herokuapp.com/postagens/${id}`)
  }

  // fazer postagem
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blogdozen.herokuapp.com/postagens', postagem,
    this.token)
  }


  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blogdozen.herokuapp.com/postagens', postagem,
    this.token)
  }

  deletePostagem(id: number){
    return this.http.delete<Postagem>(`https://blogdozen.herokuapp.com/postagens/${id}`)
  }




}
