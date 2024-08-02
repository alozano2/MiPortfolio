import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-signin-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signin-proyecto.component.html',
  styleUrls: ['./signin-proyecto.component.css'],
})
export class SigninProyectoComponent implements AfterViewInit, OnDestroy {
  private scrollRevealInstance: any;
  private platformId: Object;

  screenshots = [
    {
      imgSrc: 'assets/images/sigin_producTime.jpg',
      alt: 'Sign In',
      description:
        'Esta captura muestra la pantalla de inicio de sesión de la aplicación. Aquí los usuarios pueden ingresar sus credenciales para acceder a las funcionalidades del sistema. Si no están registrados, entonces deberan pulsar en Crear Usuario para pasar a la pantalla donde poder hacerlo.',
      delay: 800,
    },
    {
      imgSrc: 'assets/images/crearUsuario.jpg',
      alt: 'Crear Usuario',
      description:
        'Una vez pulsado el botón de crear usuario, este será derivado una pagina en la cual le pediran que ingrese una serie de datos para poder crearse una cuenta. Una vez hecho este paso, podrá iniciar sesión y entrar en el home de la app.',
      delay: 1000,
    },
  ];

  textColorClass: string = 'default-text'; // Valor inicial

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((module) => {
        const ScrollReveal = module.default;
        this.scrollRevealInstance = ScrollReveal().reveal('.screenshot-content', {
          distance: '20px',
          duration: 800,
          easing: 'ease-in-out',
          reset: true,
          viewFactor: 0.5,
          beforeReveal: (el: HTMLElement) => this.updateTextColor(),
        });

        // Actualiza el color de texto al inicializar
        this.updateTextColor();
      });
    }
  }

  updateTextColor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const step = 100;
    const maxSteps = 30;

    let textColorClass = 'default-text'; // Valor predeterminado

    if (scrollPosition > maxSteps * step) {
      textColorClass = 'white-text';
    } else {
      textColorClass = 'default-text';
    }

    this.textColorClass = textColorClass;
  }

  ngOnDestroy() {
    if (this.scrollRevealInstance) {
      this.scrollRevealInstance.destroy();
    }
  }
}


