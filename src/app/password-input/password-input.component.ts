import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  
  @Output() password: EventEmitter<string> = new EventEmitter<string>();
   setValue(input: string | undefined){
      this.password.emit(input);
   }
}
