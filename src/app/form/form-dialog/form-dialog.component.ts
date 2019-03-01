import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { person } from "src/app/contact/information/person";
import { InformationComponent } from "../../contact/information/information.component"

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.css"]
})
export class FormDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: person
  ) {
    console.log("Person to edit", data)
  }
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
