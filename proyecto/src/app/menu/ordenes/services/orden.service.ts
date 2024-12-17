import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

 private baseUrl = 'http://localhost:3030/api/orden';
  constructor(private httpClient:HttpClient) {  }
  getOrden(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+`/listar`).pipe(
      map(response => response.orden))
  }
  registrarOrden(body:any):Observable<any>{
      
    return this.httpClient.post(this.baseUrl+`/crear`,body)
  }
  buscarOrden(id:String):Observable<any>{   
    return this.httpClient.get(`${this.baseUrl}/buscarMesa/${id}`)
  }
  buscar(id:String):Observable<any>{   
    return this.httpClient.get(`${this.baseUrl}/buscar/${id}`)
  }
  eliminarOrden(id:String):Observable<any>{   
    return this.httpClient.delete(`${this.baseUrl}/eliminar/${id}`)
  }
  actualizarOrden(id:String,orden: any):Observable<any>{   
    return this.httpClient.put(`${this.baseUrl}/actualizar/${id}`,orden)
  }
}
