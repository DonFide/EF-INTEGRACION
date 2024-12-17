import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MeseroService } from '../../services/mesero.service';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit  {
 status:String=""
  mesero:any
  idMesero:any
  registerForm:FormGroup=new FormGroup({})  
  constructor(private route:ActivatedRoute, private meseroService:MeseroService,private router:Router){}

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      const id = params['id']
     this.getMesero(id) 
    }) 
  } 
  async getMesero(id:any){
    try {
      const response= await this.meseroService.buscarMesero(id).toPromise()
      if(response){
        this.status=response.status

        if(this.status==="exito"){
           console.log(response)
           this.mesero=response.mesero
           this.idMesero=this.mesero._id
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
 
 async actualizarMesero() {
  try {
      
    
      const response= await this.meseroService.actualizarMesero(this.idMesero, this.mesero).toPromise()
        
       if(response){
        this.status=response.status
        if(this.status==="exito"){
          this.router.navigate(['/mesero'])
        }
       
      } 
     
  } catch (errorResponse) {
   this.status="error"
    console.log(errorResponse)
  } 
}


}
