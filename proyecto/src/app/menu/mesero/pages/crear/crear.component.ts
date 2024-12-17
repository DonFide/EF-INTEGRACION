import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MeseroService } from '../../services/mesero.service';

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

  constructor(private router:Router,private meseroService:MeseroService){}
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
      dni:new FormControl('',[
        Validators.required,
        Validators.minLength(3) 
      ]),
      telefono:new FormControl('',[
        Validators.required,
        Validators.minLength(3) 
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(3) 
      ])
    })
  }

  async enviarDatosRegistro(){
    try {
      
      if(this.registerForm.valid){ 
        const response= await this.meseroService.registrarMesero(this.registerForm.value).toPromise()
         console.log(response)
       
         if(response){
          this.status=response.status
          if(this.status==="exito"){
            this.router.navigate(['/mesero'])
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
