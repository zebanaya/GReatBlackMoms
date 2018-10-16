import { Component, OnInit, Renderer2 } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bckImg = '../../assets/img/cover-photo.jpg';

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }
}
