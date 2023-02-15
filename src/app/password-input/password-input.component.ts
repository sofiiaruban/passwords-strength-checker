import { AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PasswordInputComponent,
    multi: true
  }]
})
export class PasswordInputComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild(DefaultValueAccessor) private valueAccessor: DefaultValueAccessor | undefined;

  private formControlChanged: any;
  private formControlTouched: any;

  public ngAfterViewInit(): void {
    if (this.valueAccessor){
      this.valueAccessor.registerOnChange(this.formControlChanged);
      this.valueAccessor.registerOnTouched(this.formControlTouched);
    }
  }

  public registerOnChange(fn: any): void {
    this.formControlChanged = fn;
  }

  public registerOnTouched(fn: any): void {
    this.formControlTouched = fn;
  }

  public writeValue(value: string): void {
    this.valueAccessor && this.valueAccessor.writeValue(value);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.valueAccessor && this.valueAccessor.setDisabledState(isDisabled);
  }
}
