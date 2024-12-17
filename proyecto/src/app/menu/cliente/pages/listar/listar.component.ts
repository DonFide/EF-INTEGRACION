import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  clientes:any;
  idCliente: string="";
  constructor(private clienteService:ClienteService,private router:Router ){}
  ngOnInit(): void {
    this.cargarClienteHttp()
  }
  async cargarClienteHttp():Promise<any>{
    this.clientes= await this.clienteService.getClientes().toPromise()
    console.log(this.clientes)
  }
  async eliminarCliente(id:any){ 
  await this.clienteService.eliminarCliente(id).toPromise()
  this.cargarClienteHttp()
  }
  async actualizarCliente(id:any){
    this.router.navigate(['/cliente/actualizar',id]);
  }
}
