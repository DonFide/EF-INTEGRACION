import { Routes } from "@angular/router";
import { PlatilloComponent } from "../menu/platillo/pages/platillo.component";
import { ClienteComponent } from "../menu/cliente/pages/cliente.component";
import { CategoriaComponent } from "../menu/categoria/pages/categoria.component";
import { MeseroComponent } from "../menu/mesero/pages/mesero.component";
import { OrdenesComponent } from "../menu/ordenes/pages/ordenes.component";

export const homeRoutes:Routes=[
  
    {
        path:'platillo',component:PlatilloComponent,
        loadChildren:()=>import('../menu/platillo/platillo-route').then(m=>m.platilloRoute)
    } 
       , 
    {
     path:'cliente',component:ClienteComponent,loadChildren:()=>import('../menu/cliente/cliente-router').then(m=>m.clienteRoute)
    }
    , 
 
    {
        path:'orden',component:OrdenesComponent,loadChildren:()=>import('../menu/ordenes/orden-routes').then(c=>c.ordenRoute)

    },
    {
        path:'categoria',component:CategoriaComponent,loadChildren:()=>import('../menu/categoria/categoria-route').then(m=>m.categoriaRoute)
    },
    {
        path:'mesero',component:MeseroComponent,loadChildren:()=>import('../menu/mesero/mesero-route').then(m=>m.meseroRoute)
    },
 

    
]