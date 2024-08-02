import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-descripcion-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './descripcion-proyecto.component.html',
  styleUrl: './descripcion-proyecto.component.css'
})
export class DescripcionProyectoComponent {
  project: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const projects = [
      {
        id: 1,
        title: 'ProducTime',
        description: 'Aplicación para Android que te ayudará a gestionar tu tiempo de manera correcta y a ser más productivo.',
        image: 'assets/images/productime_logo.png'
      },
      // Añadir más proyectos aquí si es necesario
    ];
    this.project = projects.find(p => p.id === Number(id));
    if (!this.project) {
      console.error('Project not found');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
