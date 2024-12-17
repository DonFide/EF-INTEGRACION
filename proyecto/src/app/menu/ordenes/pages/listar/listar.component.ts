import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  ordenes:any;
  idOrden: string="";
  constructor(private ordenService:OrdenService,private router:Router ){}
  ngOnInit(): void {
    this.cargarOrdenHttp()
  }
  async cargarOrdenHttp():Promise<any>{
    this.ordenes= await this.ordenService.getOrden().toPromise()
    console.log(this.ordenes)
  }
  async eliminarOrden(id:any){ 
  await this.ordenService.eliminarOrden(id).toPromise()
  this.cargarOrdenHttp()
  }
  async actualizaOrden(id:any){
    this.router.navigate(['/orden/actualizar',id]);
  }
}
