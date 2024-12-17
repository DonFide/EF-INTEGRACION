import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../services/platillo.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-platillo',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './platillo.component.html',
  styleUrl: './platillo.component.css'
})
export class PlatilloComponent  {

  
}
