import { Routes } from "@angular/router";

export const categoriaRoute:Routes=[
  
    {
        path:'',loadComponent:()=>import('../categoria/pages/listar/listar.component').then((c)=>c.ListarComponent)
       }
       , 
    {
     path:'crear',loadComponent:()=>import('../categoria/pages/crear/crear.component').then((c)=>c.CrearComponent)
    } 
       , 
  
       {
        path:'actualizar/:id',loadComponent:()=>import('../categoria/pages/actualizar/actualizar.component').then((c)=>c.ActualizarComponent)
       }
    
]