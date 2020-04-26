import { Component, Input } from '@angular/core';
import { NewServService } from './new-serv.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [];
  itr: any[] = this.dataService.getData();
  popp: any = this.itr[0];
  sport: any = this.itr[3];
  hid: any = this.itr[1];
  typ: any = this.hid - this.popp;
  boolin = true;
  hoh: boolean = false;
  myclick() {
    this.boolin = true;
    this.kok = this.hoh;
    this.lok = this.hoh;
    this.lop = this.hoh;
  }
  kok = false;
  myClick_2() {
    this.boolin = this.hoh;
    this.kok = true;
    this.lok = this.hoh;
    this.lop = this.hoh;
  }
  lok = false;
  myClick_3() {
    this.boolin = this.hoh;
    this.kok = this.hoh;
    this.lok = true;
    this.lop = this.hoh;
  }
  lop = false;
  myClick_5() {
    this.lop =true;
    this.boolin = this.hoh;
    this.kok = this.hoh;
    this.lok = false;
  }

  hidden: boolean = false;
  hidden2: boolean = false;
  hidden3: boolean = false;

  sportX: boolean = false;
  sportXL: boolean = false;
  sportXXL: boolean = false;

  constructor(private dataService: NewServService){ 
  
    if (this.typ >= 70) {
      this.hidden = true;
      this.hidden2 = false;
      this.hidden3 = false;
    } 
    if (this.typ <= 70) {
      this.hidden2 = true;
      this.hidden = false;
      this.hidden3 = false;
    } 
    if (this.typ >= 120) {
      this.hidden3 = true;
      this.hidden2 = false;
      this.hidden = false;
    } 
    if (this.sport <= 10) {
      this.sportX = true;
      this.sportXL = false;
      this.sportXXL = false;
    }
    if (this.sport >= 10) {
      this.sportX = false;
      this.sportXL = true;
      this.sportXXL = false;
    }
    if (this.sport >= 30) {
      this.sportX = false;
      this.sportXL = false;
      this.sportXXL = true;
    }
  }
      
  addItem(name: string){
        
      this.dataService.addData(name);
      
  }
  ngOnInit(){
      this.items = this.dataService.getData();
  }
}
