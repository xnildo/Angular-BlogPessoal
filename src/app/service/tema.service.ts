import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient ) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogdozen.herokuapp.com/temas')
  }

  getByIdTema(id: number):Observable<Tema>{
    return this.http.get<Tema>(`https://blogdozen.herokuapp.com/temas/${id}`)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogdozen.herokuapp.com/temas/cadastrar', tema,
    this.token)
  }

  putTema(tema: Tema):Observable<Tema>{
    return this.http.put<Tema>('https://blogdozen.herokuapp.com/temas/editar', tema)
  }

  deleteTema(id: number){
    return this.http.delete(`https://blogdozen.herokuapp.com/temas/deletar/${id}`)
  }

}
