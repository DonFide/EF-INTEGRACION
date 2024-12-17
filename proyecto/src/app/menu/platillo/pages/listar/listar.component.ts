import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../../services/platillo.service';
import { Router, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit { 

  platillos:any;
  idPlatillo: string="";
  constructor(private platilloService:PlatilloService,private router:Router ){}
  ngOnInit(): void {
    this.cargarPlatilloHttp()
  }
  async cargarPlatilloHttp():Promise<any>{
    this.platillos= await this.platilloService.getPlatillos().toPromise()
    console.log(this.platillos)
  }
  async eliminarPlatillo(id:any){ 
  await this.platilloService.eliminarPlatillo(id).toPromise()
  this.cargarPlatilloHttp()
  }
  async actualizarPlatillo(id:any){
    this.router.navigate(['/platillo/actualizar',id]);
  }
}
