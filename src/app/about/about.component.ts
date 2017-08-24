import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  message = 'This is the sample message.';
  
  constructor() {  }

  ngOnInit() {}
}
