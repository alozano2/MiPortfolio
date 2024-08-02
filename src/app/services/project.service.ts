import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }

  getProjectById(id: number) {
    return {
      id: id,
      title: 'ProducTime',
      description: 'Aplicación para Android que te ayudará a gestionar tu tiempo de manera correcta y a ser más productivo.',
      image: 'assets/images/productime_logo.png',
      screenshots: [
        'assets/images/sigin_producTime.jpg',
        'assets/images/crearUsuario.jpg'
      ]
    };
  }
}
