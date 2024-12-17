import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  menuPrincipal:Array<any>=[]
  ngOnInit(): void {
 
    this.menuPrincipal=[
    
      {
        name:'Platillo', 
        router:['/','platillo']
      }
      ,
      {
        name:'Cliente', 
        router:['/','cliente']
      }
      ,
      {
        name:'Ordenes', 
        router:['/','orden']
      }
      ,
      {
        name:'Categoria', 
        router:['/','categoria']
      }   ,
      {
        name:'Mesero', 
        router:['/','mesero']
      }
     ]
  }
}
