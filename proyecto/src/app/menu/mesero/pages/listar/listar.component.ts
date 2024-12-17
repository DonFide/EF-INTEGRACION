import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MeseroService } from '../../services/mesero.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
meseros:any;
  idMesero: string="";
  constructor(private meseroService:MeseroService,private router:Router ){}
  ngOnInit(): void {
    this.cargarMeseroHttp()
  }
  async cargarMeseroHttp():Promise<any>{
    this.meseros= await this.meseroService.getMeseros().toPromise()
    console.log(this.meseros)
  }
  async eliminarMesero(id:any){ 
  await this.meseroService.eliminarMesero(id).toPromise()
  this.cargarMeseroHttp()
  }
  async actualizarMesero(id:any){
    this.router.navigate(['/mesero/actualizar',id]);
  }
}
