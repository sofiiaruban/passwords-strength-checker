import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-section',
  templateUrl: './password-strength-section.component.html',
  styleUrls: ['./password-strength-section.component.scss']
})

export class PasswordStrengthSectionComponent implements OnInit{
  red: string = "red";
  yellow: string ="yellow";
  green: string  = "green";
  grey:string = "grey";
  value: any;
  length: number = 0;
  first:string = this.grey;
  second:string = this.grey;
  third: string = this.grey;

  ngOnInit() {
    
    this.password.valueChanges.subscribe((value = '')=> {
      const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
      const letters = /[a-zA-Z]+/.test(value || "");
      const numbers = /[0-9]+/.test(value as string);
      const symbols = regex.test(value as string);

      this.first = this.grey;
      this.second = this.grey;
      this.third = this.grey;

      if (value && value.length > 0 && value.length < 8) {
        this.first=this.red;
        this.second=this.red;
        this.third=this.red;
      } 
      if(value && value.length >= 8) {
        this.first=this.red;
      }

      if(value && value.length >= 8 && (letters && numbers || numbers && symbols || symbols && letters)) {
        this.first=this.yellow;
        this.second=this.yellow;
      }

      if(value && value.length >= 8 && letters && numbers && symbols) {
        this.first=this.green;
        this.second=this.green;
        this.third=this.green;
      }
    })
  }
}
