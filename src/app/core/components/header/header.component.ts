import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuVisible: boolean = false;

  constructor(private router: Router) {

  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  goToHome() {
    this.router.navigateByUrl('/inicio');
  }
}
