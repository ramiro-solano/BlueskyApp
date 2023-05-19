import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuOptions: Array<any> = [];

  iconButtons: Array<any> = ['uil-bars','uil-multiply'];
  menuButton: boolean = false;
  icon = this.iconButtons[0]

  //Menu responsive
  btnNavbar(): void {
    const menu = document.querySelector('.menu-responsive');
    this.menuButton === false? 
    (this.menuButton = true, menu?.classList.add('active'), this.icon = this.iconButtons[1]) :
    (this.menuButton = false, menu?.classList.remove('active'),this.icon = this.iconButtons[0])
  }

  isDarkMode: boolean = false;
  toggleDarkMode(): void {
    const page = document.querySelector('html');
    
    this.isDarkMode === false? (this.isDarkMode = !this.isDarkMode, page?.classList.add('dark')):
    (this.isDarkMode = !this.isDarkMode, page?.classList.remove('dark'));

    // Guarda en modo en localstorage
    if (page?.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'true');
      localStorage.setItem('dark-mode-btn', 'true');
    }
    else {
      localStorage.setItem('dark-mode', 'false');
      localStorage.setItem('dark-mode-btn', 'false');
    }
  }

  

  constructor() {}

  ngOnInit(): void {
    this.menuOptions = [
      {
        name: 'Facturacion',
        router: ['/','invoice']
      },
      {
        name: 'Productos',
        router: ['/','products']
      },
      {
        name: 'Servicios',
        router: ['/','services']
      }
    ];

      const page = document.querySelector('html')
      if (localStorage.getItem('dark-mode') === 'true' && localStorage.getItem('dark-mode-btn') === 'true' ) {
        page?.classList.add('dark');
        this.isDarkMode = true;
      }
      else{
        page?.classList.remove('dark');
        this.isDarkMode = false;
      }
  }
}
