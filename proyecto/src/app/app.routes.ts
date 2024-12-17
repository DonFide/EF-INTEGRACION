import { Routes } from '@angular/router';
import { HomeComponent } from './home/page/home.component';

export const routes: Routes = [
    {
    path:'',component:HomeComponent,
    loadChildren:()=>import('./home/home-route').then(m=>m.homeRoutes)
}
];
