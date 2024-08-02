import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-perfil-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-proyecto.component.html',
  styleUrl: './perfil-proyecto.component.css'
})
export class PerfilProyectoComponent {
  backgroundClass: string = 'bg-color-1';
  textColorClass: string = '';

  screenshots = [
    {
      imgSrc: 'assets/images/perfil_captura.png',
      alt: 'Perfil ProducTime',
      description: 'Éste apartado sera el encargado de mostrar información relevante sobre el perfil de usuario. <br/>' + 
      'Como vemos, muestra un mensaje con el nombre de usuario que indicaras al crear el usuario, y a continuación ' +
      'tenemos varios botones que mostraran datos que hemos ido recopilando con el uso de la app.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/historialPomodoros_captura.png',
      alt: 'Perfil ProducTime',
      description: 'Si queremos ver los Pomodoros que hemos completado (es decir, que hemos agotado los 25 minutos) ' + 
      'y ver una información de cuando los completamos tenemos la actividad Mis Pomodoros. <br/>' +
      'Además, por cada Pomodoro completado se va llenando la barra del perfil. Al llegar a los 100 Pomodoros ' +
      'recibiremos una recompensa.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/historialNotas_captura1.png',
      alt: 'Perfil ProducTime',
      description: 'Si presionamos la opcion de Historial de Tareas, nos aparece una lista con todas las notas ' + 
      'que tenemos actualmente en proceso. <br/>' +
      'En ella, nos indica toda la información de la nota, tanto el título y la descripción como la fecha. <br/> ' +
      'Además, si presionamos el icono de la papelera, la nota desaparecerá.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/historialNotas_captura2.png',
      alt: 'Perfil ProducTime',
      description: 'Éste es un ejemplo de como quedaría tras presionar la papelera y borrar una nota. Si presionamos ' + 
      'volver, retrocedemos a la pantalla anterior.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/sigin_producTime.jpg',
      alt: 'Perfil ProducTime',
      description: 'Al hacer click en Cerrar Sesión, se terminará la sesión de usuario y volveremos a la pantalla ' + 
      'para iniciar sesión.',
      delay: 500
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
