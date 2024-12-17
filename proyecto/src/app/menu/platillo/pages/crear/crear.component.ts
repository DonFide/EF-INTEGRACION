import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';  
import { PlatilloService } from '../../services/platillo.service'; 

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent implements OnInit {
 registerForm:FormGroup=new FormGroup({}) 
  status:String=""

  constructor(private router:Router,private platilloService:PlatilloService){}
  ngOnInit(): void {
   this.formulario()
  }

  formulario(){
    this.registerForm=new FormGroup({
      nombre:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      ingredientes:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),  
      precio:new FormControl('',[
        Validators.required
      ]),  
      imagen:new FormControl('',[
      ]),  
    })
  }

  async enviarDatosRegistro(){
    try {
      
      if(this.registerForm.valid){ 
        const response= await this.platilloService.registrarPlatillo(this.registerForm.value).toPromise()
         console.log(response)
       
         if(response){
          this.status=response.status
          if(this.status==="exito"){
            this.router.navigate(['/platillo'])
          }
          else{
            this.registerForm.reset()
          }
        } 
      }
    } catch (errorResponse) {
     this.status="error"
      console.log(errorResponse)
    }
  }
}
