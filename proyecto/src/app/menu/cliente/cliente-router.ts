import { Routes } from "@angular/router";

export const clienteRoute:Routes=[
  
    {
        path:'',loadComponent:()=>import('../cliente/pages/listar/listar.component').then((c)=>c.ListarComponent)
       }
       , 
    {
     path:'crear',loadComponent:()=>import('../cliente/pages/crear/crear.component').then((c)=>c.CrearComponent)
    }
    , 
    {
        path:':id',loadComponent:()=>import('../cliente/pages/buscar/buscar.component').then((c)=>c.BuscarComponent)
       }
       , 
  
       {
        path:'actualizar/:id',loadComponent:()=>import('../cliente/pages/actualizar/actualizar.component').then((c)=>c.ActualizarComponent)
       }
    
]