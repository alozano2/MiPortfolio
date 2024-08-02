import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-pomodoro-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pomodoro-proyecto.component.html',
  styleUrl: './pomodoro-proyecto.component.css'
})
export class PomodoroProyectoComponent {
  backgroundClass: string = 'bg-color-1';
  textColorClass: string = '';

  screenshots = [
    {
      imgSrc: 'assets/images/pomodoro_captura.png',
      alt: 'Pomodoro ProducTime',
      description: 'En ésta ventana, tenemos la opción de comenzar un Pomodoro, los cuáles son una muy buena ' + 
      'herramienta para estudiar, o hacer alguna tarea que nos requiera tiempo y concentración. <br/>' +
      'Si antes de que finalicen los 25 cambiamos de pestaña o abandonamos la app, el tiempo se reestablecerá automaticamente ' +
      'y el Pomodoro no contará como completado. <br/>' +  
      'Los pomodoros completados se guardarán en una sección de Mi Perfil, pudiendo así comprobar el día y la hora en ' +
      'que se completo dicho Pomodoro. <br/>' + 
      'Además, por cada Pomodoro completado (es decir, que haya agotado los 25 minutos), se cargará la barra del perfil ' + 
      'y una vez que se complete del todo, se recibirá una recompensa.',
      delay: 800
    }
  ];

  private aosInstance: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        offset: 200,
        delay: 0,
        duration: 600,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
      });
      console.log('AOS initialized');
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.refresh();
    }
  }
}
