import { Component } from '@angular/core';
import { FormControl, SelectControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  
  password = new FormControl('');
  blue:string = "blue";
  red: string = "red";
  yellow: string ="yellow";
  green: string  = "green";
  grey:string = "grey";
  color:string = this.grey;
  strength: string ="";
  value: any;
  length: number = 0;
  first:string = "";
  second:string = "";
  third: string = "";
  
  count:number | undefined;

  ngOnInit() {
    this.password.valueChanges.subscribe((value = '')=> {
      const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
      const letters = /[a-zA-Z]+/.test(value || "");
      const numbers = /[0-9]+/.test(value as string);
      const symbols = regex.test(value as string);

      this.first=this.grey;
      this.second=this.grey;
      this.third= this.grey;

      if (value && value.length > 0 && value.length < 8) {
        this.first=this.red;
        this.second=this.red;
        this.third=this.red;
      } 
      if(value && value.length >= 8) {
        this.first=this.red;
      }

      if(value && value.length >= 8 && letters && numbers) {
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

  changeHandler(event:Event){
   
    // this
    // console.log(letters);
    // console.log(numbers);
    // console.log(symbols);

   //setBarColors(this.count, this.color) {
   //   for (let i = 0; i < this.sectionList.length; i++) {
   //     this[sectionList[i]] = color;
   //   }
   // }



  }
}

function setBarColors(count: number | undefined, color: string) {
  throw new Error('Function not implemented.');
}
