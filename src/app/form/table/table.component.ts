import { Component, ViewChild, OnInit } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { BasePortalHost } from "@angular/cdk/portal";
import { MatDialog } from "@angular/material/dialog";
import { FormDialogComponent } from "../form-dialog/form-dialog.component";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  rows = [];
  temp = [];
  filteredData = [];

  constructor(public dialog: MatDialog) {}

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {
    this.init();
  }

  init() {
    //get data to be used late
    const data = JSON.parse(localStorage.getItem("items"));
    if (!data) {
      alert("No data to display");
      return;
    }
    //console.log(data);

    //add data to the table
    this.rows = [];
    data.forEach(element => {
      this.rows.push(element);
    });
    this.filteredData = this.rows;
    this.temp = this.rows;
    console.log(this.rows);
  }

  clear() {
    localStorage.clear();
  }

  // delete(index: number){
  delete(row: any) {
    console.log(row);
    // JSON.stringify(row);
    let temp: any[] = JSON.parse(localStorage.getItem("items"));
    // temp.forEach(t => {
    //   if (
    //     t.email == row.email &&
    //     t.number == row.number &&
    //     t.name == row.name
    //   ) {
    //     console.log("this is equal", row, t);
    //   }
    // });
    var index = temp.findIndex(
      val =>
        val.email == row.email &&
        row.number == row.number &&
        row.name == row.name
    );
    console.log(index);
    temp.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(temp));
    this.init();
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: "500px",
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.init();
      // this.animal = result;
    });

  }

  filter(event) {
    this.filteredData = this.rows;
    /*
    let val = event.target.value.toLowerCase();
    let colNum = 3;
    let keys = Object.keys(this.temp[0]);
    this.temp = this.filteredData.filter(function(item){
      for (let i=0; i<colNum; i++){
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
          return true;
        }
      }
    });
    this.table.offset = 0;
    */
    const val = event.target.value.toLowerCase();

    // filter our data
    const filteredData = this.temp.filter(function(d) {
      return (
        d.name.toLowerCase().indexOf(val) !== -1 ||
        d.email.toLowerCase().indexOf(val) !== -1 ||
        d.number.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    // update the rows
    this.rows = filteredData;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
