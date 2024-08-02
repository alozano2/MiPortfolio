import { Component } from '@angular/core';
import { DescripcionProyectoComponent } from "../descripcion-proyecto/descripcion-proyecto.component";
import { SigninProyectoComponent } from "../signin-proyecto/signin-proyecto.component";
import { HomeProyectoComponent } from "../home-proyecto/home-proyecto.component";
import { RecursosProyectoComponent } from "../recursos-proyecto/recursos-proyecto.component";
import { PomodoroProyectoComponent } from "../pomodoro-proyecto/pomodoro-proyecto.component";
import { PerfilProyectoComponent } from "../perfil-proyecto/perfil-proyecto.component";

@Component({
  selector: 'app-main-detalle',
  standalone: true,
  imports: [DescripcionProyectoComponent, SigninProyectoComponent, HomeProyectoComponent, RecursosProyectoComponent, PomodoroProyectoComponent, PerfilProyectoComponent],
  templateUrl: './main-detalle.component.html',
  styleUrl: './main-detalle.component.css'
})
export class MainDetalleComponent {

}
