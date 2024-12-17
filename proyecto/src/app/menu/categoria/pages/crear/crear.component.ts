import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

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

  constructor(private router:Router,private categoriaService:CategoriaService){}
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
      descripcion:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    })
  }

  async enviarDatosRegistro(){
    try {
      
      if(this.registerForm.valid){ 
        const response= await this.categoriaService.registrarCategoria(this.registerForm.value).toPromise()
         console.log(response)
       
         if(response){
          this.status=response.status
          if(this.status==="exito"){
            this.router.navigate(['/categoria'])
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
