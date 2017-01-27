import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpService{

  constructor(private http:Http) { }

  GetData(){
    return this.http.get("https://api.icndb.com/jokes/random");
  }
}
