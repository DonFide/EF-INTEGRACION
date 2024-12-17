import { Routes } from "@angular/router";

export const meseroRoute:Routes=[
  
    {
        path:'',loadComponent:()=>import('../mesero/pages/listar/listar.component').then((c)=>c.ListarComponent)
       }
       , 
    {
     path:'crear',loadComponent:()=>import('../mesero/pages/crear/crear.component').then((c)=>c.CrearComponent)
    } 
       , 
  
       {
        path:'actualizar/:id',loadComponent:()=>import('../mesero/pages/actualizar/actualizar.component').then((c)=>c.ActualizarComponent)
       }
    
]