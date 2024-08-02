import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario,
    // como enviar los datos a un servidor o simplemente mostrar un mensaje.
    console.log('Formulario enviado');
  }
}
