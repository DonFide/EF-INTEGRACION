import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlatilloService } from '../../services/platillo.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {
  status:String=""
  platillo:any
  constructor(private route:ActivatedRoute, private platilloService:PlatilloService){}
  ngOnInit(): void { 
    this.loadPage()
  } 
  loadPage(){
    this.route.params.subscribe(params => {
      const id = params['id']
     this.getPlatillo(id)
    }) 
  }
  async getPlatillo(id:any){
    try {
      const response= await this.platilloService.buscarPlatillo(id).toPromise()
      if(response){
        this.status=response.status
        if(this.status==="exito"){
           console.log(response)
           this.platillo=response.platillo
        } 
    } 
    }
    catch (error) {
      this.status="error"
    }
  
 }
}
