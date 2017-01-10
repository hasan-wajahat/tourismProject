import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  activeButton: Array<boolean> = [false, false, false, false];

  ngOnInit() {
    this.activeButton[0] = true;
    this.router.events.subscribe(event => {
      this.activeButton.map(function (val, i, arr) {
        arr[i] = false;
      })
      if (event instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/':
            this.activeButton[0] = true;
            break;
          case '/booking':
            this.activeButton[1] = true;
            break;
          case '/info':
            this.activeButton[2] = true;
            break;
          case '/contactUs':
            this.activeButton[3] = true;
            break;
          default:
            this.activeButton[0] = true;
            break
        }
      }
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
