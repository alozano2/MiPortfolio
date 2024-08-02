import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { TittleComponent } from "../tittle/tittle.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [PortfolioComponent, AboutComponent, ContactComponent, TittleComponent]
})
export class HomeComponent {

}
