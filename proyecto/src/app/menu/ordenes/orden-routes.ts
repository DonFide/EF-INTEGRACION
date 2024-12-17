import { Routes } from "@angular/router";

export const ordenRoute:Routes=[
  
    {
        path:'',loadComponent:()=>import('../ordenes/pages/listar/listar.component').then((c)=>c.ListarComponent)
       }
       , 
    {
     path:'crear',loadComponent:()=>import('../ordenes/pages/crear/crear.component').then((c)=>c.CrearComponent)
    }
    , 
   
       {
           path:'buscarMesa/:id',loadComponent:()=>import('../ordenes/pages/buscar/buscar.component').then((c)=>c.BuscarComponent)
          }
       , 
  
       {
        path:'actualizar/:id',loadComponent:()=>import('../ordenes/pages/actualizar/actualizar.component').then((c)=>c.ActualizarComponent)
       }
    
]