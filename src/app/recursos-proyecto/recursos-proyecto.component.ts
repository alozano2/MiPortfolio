import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-recursos-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursos-proyecto.component.html',
  styleUrl: './recursos-proyecto.component.css'
})
export class RecursosProyectoComponent {
  screenshots = [
    {
      imgSrc: 'assets/images/recursos_captura.png',
      alt: 'Recursos ProducTime',
      description: 'Si pulsamos el boton de "Recursos" en la barra de tareas inferior, se nos abrirá esta pantalla, que muestra ' + 
      'los distintos elementos que puedes ver en la app. <br/>' + 
      'Éstas listas, están gestionadas para actualizarse y mostrar siempre los productos que mejor funcionan, actualizado semanalmente. De ésta forma, es más difícil ' +
      'perderte en las cientos de miles de opciones que hay hoy en dia, y conseguirás productos que ya han utilizado miles de personas en el mundo' + 
      ' y los ha funcionado.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/articulos_captura.png',
      alt: 'Articulos Productime',
      description: 'En el primer elemento llamado "Artículos", tenemos una selección de los mejores y más interersantes artículos en cuanto a productividad. ' + 
      'Éstos, pueden ser tanto artículos motivacionales, como también biográficos, políticos o incluso deportivos. A veces podrían aparecer también ' + 
      'noticias, pero siempre tendrán algo relacionado con la motivación, la no procrastinación y el avance como persona o ser humano.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/detalleArticulo_captura.png',
      alt: 'Articulo Detalle',
      description: 'Cuando seleccionamos un artículo, nos sale algo así. Aquí vemos el/la autor/a, la fecha, un breve resumen sobre dicho artículo' +
      ' y un enlace a su sitio web, para que en caso de que te interese puedas ir a él directamente.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/podcast_captura.png',
      alt: 'Recursos ProducTime',
      description: 'De igual manera sucede con el resto de elementos, con una pequeña diferencia. En este ejemplo tenemos los podcast, ' + 
      'los cuales, al igual que todos los demás, muestran también una fotografía representativa. <br/>' + 
      'Así, mostramos en una lista los mejores Podcast que te ayudarán a gestionarte mejor y puedes seleccionar el que más te interese. <br/>',
      delay: 500
    },
    {
      imgSrc: 'assets/images/podcastDetalle_captura1.png',
      alt: 'Recursos ProducTime',
      description: 'Una vez seleccionado alguno, vemos una pantalla con una fotografia, el autor o autores, un resumen y  ' + 
      'un link con un enlace directo a la app donde puedas consumir o comprar dicho producto.',
      delay: 500
    },
    {
      imgSrc: 'assets/images/podcastDetalle_captura2.png',
      alt: 'Recursos ProducTime',
      description: 'En ésta última captura vemos el enlace que te lleva directamente al sitio web.',
      delay: 500
    }
  ];

  backgroundClass: string = 'bg-color-1';
  textColorClass: string = '';

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
