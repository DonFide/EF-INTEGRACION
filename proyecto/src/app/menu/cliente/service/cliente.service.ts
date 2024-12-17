import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 private baseUrl = 'http://localhost:3030/api/cliente';
  constructor(private httpClient:HttpClient) {  }
  getClientes(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+`/listar`).pipe(
      map(response => response.cliente))
  }
  registrarCliente(body:any):Observable<any>{
      
    return this.httpClient.post(this.baseUrl+`/crear`,body)
  }
  buscarCliente(id:String):Observable<any>{   
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }
  eliminarCliente(id:String):Observable<any>{   
    return this.httpClient.delete(`${this.baseUrl}/eliminar/${id}`)
  }
  actualizarCliente(id:String,cliente: any):Observable<any>{   
    return this.httpClient.put(`${this.baseUrl}/actualizar/${id}`,cliente)
  }
}
