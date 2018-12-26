import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-s1',
  templateUrl: './landing-s1.component.html',
  styleUrls: ['./landing-s1.component.css']
})
export class LandingS1Component implements OnInit {
  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234567890'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });
  constructor() { }

  ngOnInit() {
  }

  indexChanged(index) {
    console.log(index);
  }
}
