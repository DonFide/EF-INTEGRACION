import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {
 status:String=""
  categoria:any
  idCategoria:any
  registerForm:FormGroup=new FormGroup({})  
  constructor(private route:ActivatedRoute, private categoriaService:CategoriaService,private router:Router){}

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      const id = params['id']
     this.getCategoria(id) 
    }) 
  } 
  async getCategoria(id:any){
    try {
      const response= await this.categoriaService.buscarCategoria(id).toPromise()
      if(response){
        this.status=response.status

        if(this.status==="exito"){
           console.log(response)
           this.categoria=response.categoria
           this.idCategoria=this.categoria._id
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
 
 async actualizarCategoria() {
  try {
      
    
      const response= await this.categoriaService.actualizarCategoria(this.idCategoria, this.categoria).toPromise()
        
       if(response){
        this.status=response.status
        if(this.status==="exito"){
          this.router.navigate(['/categoria'])
        }
       
      } 
     
  } catch (errorResponse) {
   this.status="error"
    console.log(errorResponse)
  } 
}


}
