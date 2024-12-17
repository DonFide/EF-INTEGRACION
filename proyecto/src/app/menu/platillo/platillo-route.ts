import { Routes } from "@angular/router";

export const platilloRoute:Routes=[
  
    {
        path:'',loadComponent:()=>import('../platillo/pages/listar/listar.component').then((c)=>c.ListarComponent)
       }
       , 
    {
     path:'crear',loadComponent:()=>import('../platillo/pages/crear/crear.component').then((c)=>c.CrearComponent)
    }
    , 
    {
        path:'buscar/:id',loadComponent:()=>import('../platillo/pages/buscar/buscar.component').then((c)=>c.BuscarComponent)
       }
       , 
  
       {
        path:'actualizar/:id',loadComponent:()=>import('../platillo/pages/actualizar/actualizar.component').then((c)=>c.ActualizarComponent)
       }
    
]