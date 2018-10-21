import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-devin',
  template: `
    <h2>devin Component using ngForm in an inline template</h2>
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
    <input name="first" ngModel required #first="ngModel">
    <input name="last" ngModel>
    <button>Submit</button>
  </form>

  <p>First name value: {{ first.value }}</p>
  <p>First name valid: {{ first.valid }}</p>
  <p>Form value: {{ f.value | json }}</p>
  <p>Form valid: {{ f.valid }}</p>
  `,
  styleUrls: ['./devin.component.css']
})
export class DevinComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
