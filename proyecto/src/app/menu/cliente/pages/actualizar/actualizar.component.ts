import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit{
 status:String=""
  cliente:any
  idCliente:any
  registerForm:FormGroup=new FormGroup({})  
  constructor(private route:ActivatedRoute, private clienteService:ClienteService,private router:Router){}

  ngOnInit(): void { 
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
           this.idCliente=this.cliente._id
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
 
 async actualizarCliente() {
  try {
      
    
      const response= await this.clienteService.actualizarCliente(this.idCliente, this.cliente).toPromise()
        
       if(response){
        this.status=response.status
        if(this.status==="exito"){
          this.router.navigate(['/cliente'])
        }
       
      } 
     
  } catch (errorResponse) {
   this.status="error"
    console.log(errorResponse)
  } 
}

}
