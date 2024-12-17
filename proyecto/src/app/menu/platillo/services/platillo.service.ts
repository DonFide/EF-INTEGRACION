import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  private baseUrl = 'http://localhost:3030/api/platillo';
  constructor(private httpClient:HttpClient) {  }
  getPlatillos(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+`/listar`).pipe(
      map(response => response.platillo))
  }
  registrarPlatillo(body:any):Observable<any>{
      
    return this.httpClient.post(this.baseUrl+`/crear`,body)
  }
  buscarPlatillo(id:String):Observable<any>{   
    return this.httpClient.get(`${this.baseUrl}/buscar/${id}`)
  }
  eliminarPlatillo(id:String):Observable<any>{   
    return this.httpClient.delete(`${this.baseUrl}/eliminar/${id}`)
  }
  actualizarPlatillo(id:String,platillo: any):Observable<any>{   
    return this.httpClient.put(`${this.baseUrl}/actualizar/${id}`,platillo)
  }
}
