import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      id: 1,
      title: 'ProducTime',
      description: 'Aplicación para Android que te ayudará a gestionar tu tiempo de manera correcta y a ser más productivo.',
      image: 'assets/images/productime_logo.png' // Cambia la ruta según sea necesario
    },
    // Añade más proyectos aquí
  ];

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200, 
        once: false,    
      });
    }
  }

  viewProjectDetails(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }
}



