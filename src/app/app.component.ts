import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainInformationComponent } from './main-information/main-information.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainInformation2Component } from "./main-information-2/main-information-2.component";
import { MainInformation3Component } from "./main-information-3/main-information-3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainInformationComponent, NavbarComponent, FooterComponent, MainInformation2Component, MainInformation3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vakaniya';
}
