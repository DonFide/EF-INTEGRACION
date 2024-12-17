import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {

 private baseUrl = 'http://localhost:3030/api/mesero';
  constructor(private httpClient:HttpClient) {  }
  getMeseros(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+`/listar`).pipe(
      map(response => response.mesero))
  }
  registrarMesero(body:any):Observable<any>{
      
    return this.httpClient.post(this.baseUrl+`/crear`,body)
  }
  buscarMesero(id:String):Observable<any>{   
    return this.httpClient.get(`${this.baseUrl}/buscar/${id}`)
  }
  eliminarMesero(id:String):Observable<any>{   
    return this.httpClient.delete(`${this.baseUrl}/eliminar/${id}`)
  }
  actualizarMesero(id:String,platillo: any):Observable<any>{   
    return this.httpClient.put(`${this.baseUrl}/actualizar/${id}`,platillo)
  }
}
