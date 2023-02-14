import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-section',
  templateUrl: './password-strength-section.component.html',
  styleUrls: ['./password-strength-section.component.scss']
})

export class PasswordStrengthSectionComponent implements OnInit{
  
  @Input() first: string;
  @Input() second:string;
  @Input() third:string;
  ngOnInit(): void {
  }
}
