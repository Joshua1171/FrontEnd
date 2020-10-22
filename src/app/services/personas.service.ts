import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //private http: HttpClient;

  private baseEndpoint='http://localhost:8888/api/personas';

  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {
    //this.http=http;
  }

  public listar(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.baseEndpoint);
  }
  public ver(id: number): Observable<Persona>{
    return this.http.get<Persona>(`${this.baseEndpoint}/${id}`);
  }
  public crear(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseEndpoint, persona,
      { headers: this.cabeceras });
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.baseEndpoint}/${persona.id}`,persona,
      { headers: this.cabeceras });
  }

}
