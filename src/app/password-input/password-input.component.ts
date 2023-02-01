import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  password = new FormControl('');
  
  changeHandler() {
    console.log(this.password.value);
  }
  
}
