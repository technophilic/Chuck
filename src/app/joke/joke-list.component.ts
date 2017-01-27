import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import {HttpService} from "../http.service";
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styles: []
})
export class JokeListComponent implements OnInit {

  jokes:String[]=[];
  constructor(private api:HttpService){}

  newJoke(){
    this.api.GetData().subscribe(
      (dat:Response)=>this.jokes.push(dat.json().value.joke)
    );
  }
  ngOnInit(){
    this.newJoke();
  }

}
