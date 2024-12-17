import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit{
status:String=""
  cliente:any
  constructor(private route:ActivatedRoute, private clienteService:ClienteService){}
  ngOnInit(): void { 
    this.loadPage()
  } 
  loadPage(){
    this.route.params.subscribe(params => {
      const id = params['id']
     this.getCliente(id)
    }) 
  }
  async getCliente(id:any){
    try {
      const response= await this.clienteService.buscarCliente(id).toPromise()
      if(response){
        this.status=response.status
        if(this.status==="exito"){
           console.log(response)
           this.cliente=response.cliente
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
}
