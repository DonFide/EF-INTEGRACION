import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit{
  status:String=""
  orden:any
  constructor(private route:ActivatedRoute, private ordenService:OrdenService){}
  ngOnInit(): void { 
    this.loadPage()
  } 
  loadPage(){
    this.route.params.subscribe(params => {
      const id = params['id']
     this.getOrden(id)
    }) 
  }
  async getOrden(id:any){
    try {
      const response= await this.ordenService.buscarOrden(id).toPromise()
      if(response){
        this.status=response.status
        if(this.status==="exito"){
           console.log(response)
           this.orden=response.orden
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
}
