import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-proyecto.component.html',
  styleUrl: './home-proyecto.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '0.3s ease-in',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class HomeProyectoComponent {
  screenshots = [
    {
      imgSrc: 'assets/images/captura_home.png',
      alt: 'Home ProducTime',
      description: 'Una vez que iniciamos sesión, aparace el Home de la aplicación. Como vemos éste consta de una barra de tareas inferior, ' + 
      'un calendario, y un libro y un consejo que aparecen de manera diaria. Si pulsamos en el calendario, se nos habre otra actividad ' +
      '(mostrada debajo) en la cual podremos guardar nuevas notas. Si pulsamos en el libro o consejo que nos muestra, nos lleva al detalle del ' +
      'elemento que hayamos seleccionado. Para movernos libremente por la app, podemos ir haciendolo mediante la barra de tareas.',
      delay: 800
    },
    {
      imgSrc: 'assets/images/guardarNota_captura.png',
      alt: 'Crear Nota',
      description: 'Una vez que seleccionamos un dia en el calendario, nos aparecerá esta ventana. En ella ' + 
      'debemos incluir un titulo y una descripción de la nota, tal y como se ve en el ejemplo. Una vez que le damos en guardar, ' + 
      'se recoge el día seleccionado y se guarda la nota en la base de datos.',
      delay: 1000
    },
    {
      imgSrc: 'assets/images/guardarNota_captura2.png',
      alt: 'Crear Nota',
      description: 'Éste es un ejemplo de como quedaría una nota. Presionamos en guardar y la nota ya está guardada.',
      delay: 1000
    }
  ];
  
  backgroundClass: string = 'bg-color-1';
  textColorClass: string = '';
}
