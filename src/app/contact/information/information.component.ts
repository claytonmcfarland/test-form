import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormValidators } from "./form.validators";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";
import { person } from "./person";
import {
  numericIndexGetter,
  RowHeightCache
} from "@swimlane/ngx-datatable/release/utils";
import { temporaryAllocator } from "@angular/compiler/src/render3/view/util";

@Component({
  selector: "signup-form",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.css"]
})
export class InformationComponent {
  form: FormGroup;

  constructor() {
    this.form = this.buildForm();
  }

  buildForm() {
    return new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        FormValidators.mustContainSpace
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      number: new FormControl("", [
        Validators.required,
        FormValidators.invalidPhoneNumber
      ])
    });
  }

  login() {
    // if(this.form.get('name').invalid || this.form.get('email').invalid /*|| this.form.get('number').invalid*/){
    if (this.form.invalid) {
      this.form.setErrors({
        invalidLogin: true
      });
    } else {
      //initialize array based on what is already in local storage
      let itemsArray = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];

      //push new item into local storage
      // this.form.value;
      let p = new person(this.form.value);
      itemsArray.push(p);
      localStorage.setItem("items", JSON.stringify(itemsArray));
      // this.form.reset();
      this.form = this.buildForm();
    }
  }

  clear() {
    localStorage.clear();
  }

  get name() {
    return this.form.get("name");
  }

  get email() {
    return this.form.get("email");
  }

  get number() {
    return this.form.get("number");
  }
}
