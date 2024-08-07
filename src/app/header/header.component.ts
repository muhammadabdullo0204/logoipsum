import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  isMobileMenuVisible = false;

  toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
      if (window.innerWidth > 770) {
          this.isMobileMenuVisible = false;
      }
  }

  
}
