import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OrdenService } from '../../services/orden.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {


registerForm:FormGroup=new FormGroup({}) 
  status:String=""

  constructor(private router:Router,private ordenService:OrdenService){}
  ngOnInit(): void {
   this.formulario()
  }

  formulario(){
    this.registerForm=new FormGroup({
      
      idmesa:new FormControl('',[
        Validators.required
      ]),
      platillo:new FormControl('',[
        Validators.required
      ]),  
      cantidad:new FormControl('',[
        Validators.required
      ]),  
      estado:new FormControl('',[
      ]),  
    })
  }

  async enviarDatosRegistro(){
    try {
      
      if(this.registerForm.valid){ 
        const formValue = this.registerForm.value;

        const datosTransformados = {
          idmesa: formValue.idmesa,
          estado: "pendiente",
          platillos: [
            {
              platillo: formValue.platillo,
              cantidad: formValue.cantidad  
            }
          ]
        };

        const response= await this.ordenService.registrarOrden(datosTransformados).toPromise()
         console.log(response)
       
         if(response){
          this.status=response.status
          if(this.status==="exito"){
            this.router.navigate(['/orden'])
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