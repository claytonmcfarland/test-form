import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  rows = [];

  ngOnInit() {
    //get data to be used late
    const data = JSON.parse(localStorage.getItem('items'));
    //console.log(data);

    //add data to the table
    this.rows=[];
    data.forEach(element => {
      this.rows.push(element);
    });
    console.log(this.rows);
  }

  clear(){
    localStorage.clear();
  }

}
