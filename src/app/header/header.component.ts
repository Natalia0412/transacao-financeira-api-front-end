import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleResponsiveClass(): void {
    const element = document.getElementById('myTopnav');
    if (element !== null) {
      if (element.className === 'topnav') {
        element.className += ' responsive';
      } else {
        element.className = 'topnav';
      }
    }
  }
}
