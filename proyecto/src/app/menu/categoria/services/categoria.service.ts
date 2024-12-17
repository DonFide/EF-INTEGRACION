import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
 private baseUrl = 'http://localhost:3030/api/categoria';
  constructor(private httpClient:HttpClient) {  }
  getCategoria(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+`/listar`).pipe(
      map(response => response.categoria))
  }
  registrarCategoria(body:any):Observable<any>{
      
    return this.httpClient.post(this.baseUrl+`/crear`,body)
  }
  buscarCategoria(id:String):Observable<any>{   
    return this.httpClient.get(`${this.baseUrl}/buscar/${id}`)
  }
  eliminarCategoria(id:String):Observable<any>{   
    return this.httpClient.delete(`${this.baseUrl}/eliminar/${id}`)
  }
  actualizarCategoria(id:String,categoria: any):Observable<any>{   
    return this.httpClient.put(`${this.baseUrl}/actualizar/${id}`,categoria)
  }
}
