import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {
 status:String=""
  orden:any
  idOrden:any
  registerForm:FormGroup=new FormGroup({})  
  constructor(private route:ActivatedRoute, private ordenService:OrdenService,private router:Router){}

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      const id = params['id']
     this.getOrden(id) 
    }) 
  } 
  async getOrden(id:any){
    try {
      const response= await this.ordenService.buscar(id).toPromise()
      if(response){
        this.status=response.status

        if(this.status==="exito"){
           console.log(response)
           this.orden=response.orden
           this.idOrden=this.orden._id
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
 
 async actualizarOrden() {
  try {
      
    
      const response= await this.ordenService.actualizarOrden(this.idOrden, this.orden).toPromise()
        
       if(response){
        this.status=response.status
        if(this.status==="exito"){
          this.router.navigate(['/orden'])
        }
       
      } 
     
  } catch (errorResponse) {
   this.status="error"
    console.log(errorResponse)
  } 
}
}
