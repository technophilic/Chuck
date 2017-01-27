import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent implements OnInit {

  @Input() Joke:String="";
  constructor() { }

  ngOnInit() {
  }

}
