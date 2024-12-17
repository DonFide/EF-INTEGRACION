import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
categorias:any;
  idCategoria: string="";
  constructor(private categoriaService:CategoriaService,private router:Router ){}
  ngOnInit(): void {
    this.cargarCategoriaHttp()
  }
  async cargarCategoriaHttp():Promise<any>{
    this.categorias= await this.categoriaService.getCategoria().toPromise()
    console.log(this.categorias)
  }
  async eliminarCategoria(id:any){ 
  await this.categoriaService.eliminarCategoria(id).toPromise()
  this.cargarCategoriaHttp()
  }
  async actualizarCategoria(id:any){
    this.router.navigate(['/categoria/actualizar',id]);
  }
}
