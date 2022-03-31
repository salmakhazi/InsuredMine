import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  listUsers: boolean = false;
  text!: string;
  @ViewChild("txtArea")
  inputElement!: ElementRef;
  display: boolean = false;

  user = [
    { name: "abc", password: 101 },
    { name: "xyz", password: 102 },
    { name: "mno", password: 103 },

  ];
  value: any;

  constructor() { }
  ngAfterViewInit() {

  }

  onItemSelect(item: any) {
    this.text = this.text + '' + item + ' '
    this.listUsers = false;
    this.inputElement.nativeElement.focus()
  }


  onclick(val: any) {
    this.value = val;
    console.log(this.value.slice(this.value.length - 1))

    if (this.value.slice(this.value.length - 1) == '@') {
      this.listUsers = true;

    }
    else {
      this.listUsers = false;
    }
  }


}
