import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // styles: ['body { background: url(\'http://placehold.it/1920x1080\') no-repeat center center fixed; -webkit-background-size: cover;' +
  //  '-moz-background-size: cover; background-size: cover; -o-background-size: cover;}']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }
}
