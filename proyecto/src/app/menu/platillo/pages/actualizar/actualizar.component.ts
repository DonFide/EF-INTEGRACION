import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PlatilloService } from '../../services/platillo.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {
  status:String=""
  platillo:any
  idPlatillo:any
  registerForm:FormGroup=new FormGroup({})  
  constructor(private route:ActivatedRoute, private platilloService:PlatilloService,private router:Router){}

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      const id = params['id']
     this.getPlatillo(id) 
    }) 
  } 
  async getPlatillo(id:any){
    try {
      const response= await this.platilloService.buscarPlatillo(id).toPromise()
      if(response){
        this.status=response.status

        if(this.status==="exito"){
           console.log(response)
           this.platillo=response.platillo
           this.idPlatillo=this.platillo._id
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
 
 async actualizarPlatillo() {
  try {
      
    
      const response= await this.platilloService.actualizarPlatillo(this.idPlatillo, this.platillo).toPromise()
        
       if(response){
        this.status=response.status
        if(this.status==="exito"){
          this.router.navigate(['/platillo'])
        }
       
      } 
     
  } catch (errorResponse) {
   this.status="error"
    console.log(errorResponse)
  } 
}


}
