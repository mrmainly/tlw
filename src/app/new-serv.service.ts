import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class NewServService {
     private array_string: any[] = ["60", "173", "75","20"];

     getData(): any[] {
        return this.array_string;
     }

     addData(name: string){
          
      this.array_string.push(name);
  }
     constructor(private http: HttpClient){ }
     
     search() {
     }
}
