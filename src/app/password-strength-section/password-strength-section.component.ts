import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-password-strength-section',
  templateUrl: './password-strength-section.component.html',
  styleUrls: ['./password-strength-section.component.scss']
})

export class PasswordStrengthSectionComponent implements OnChanges {
  red: string = "red";
  yellow: string ="yellow";
  green: string  = "green";
  grey:string = "grey";
  length: number = 0;
  first:string = this.grey;
  second:string = this.grey;
  third: string = this.grey;
  sectionList: Array<string> = ["first", "second", "third"]

  @Input()
  password!: string | null;
    
  ngOnChanges() {
     const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
     const letters = /[a-zA-Z]+/.test(this.password || "");
     const numbers = /[0-9]+/.test(this.password||'');
     const symbols = regex.test(this.password||'');

     //this.first = this.grey;
     //this.second = this.grey;
     //this.third = this.grey;
     this.getColors(3,this.grey);

     if (this.password && this.password.length > 0 && this.password.length < 8) {
      this.getColors(3, this.red);
       //this.first=this.red;
       //this.second=this.red;
       //this.third=this.red;
     } 
     if(this.password && this.password.length >= 8) {
       this.first=this.red;
       this.getColors(3,this.grey);
     }

     if(this.password && this.password.length >= 8 && (letters && numbers || numbers && symbols || symbols && letters)) {
       this.first=this.yellow;
       this.second=this.yellow;
     }

     if(this.password && this.password.length >= 8 && letters && numbers && symbols) {
       this.first=this.green;
       this.second=this.green;
       this.third=this.green;
     }
  }

  private getColors(counter:number, color:string) {
    for (let i = 0; i < counter; i++){
      (this as any)[this.sectionList[i]] = color;
    }
  }
}
