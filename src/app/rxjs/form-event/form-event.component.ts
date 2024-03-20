import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormEventComponent),
      multi: true
    }
  ]
})
export class FormEventComponent implements OnInit, ControlValueAccessor {

  // @Input() formControl: any;
  // @Output() change = new EventEmitter()
  // @ViewChild("sdt",{static:true}) public sdt!: ElementRef;
  name = ""
  constructor(){
  }

  ngOnInit(): void {
  }

  value: string = "";
  disabled: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: string): void {
    console.log("1234");

    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // changeValue(e: any) {
  //   console.log("333333333333333333: ", e);
  //   this.change.emit(e)
  // }

  updateValue(event: Event): void {
    console.log("event: ", event);

    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue);
    this.onTouch();
  }

}
