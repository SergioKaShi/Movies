import { Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'src/app/core/utils/control-value-accesor-connector';

@Component({
  selector: 'mov-input',
  templateUrl: './mov-input.component.html',
  styleUrls: ['./mov-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MovInputComponent), multi: true
  }]
})
export class MovInputComponent extends ControlValueAccessorConnector implements OnInit {

  @Input() label: string;
  @Input() id: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = null;
  @Input() showIcon: boolean = false;
  @Input() icon: string = 'fas fa-plus';
  @Input() items: Array<string> = [];
  @Input() required: boolean = false;
  @Input() hasErrors: boolean = false;
  @Input() messageError: string = 'Campo inválido';
  @Input() min: number = 0;
  @Input() max: number = 9999;
  @Output() addElementEvent: EventEmitter<string> = new EventEmitter();
  @Output() removeElementEvent: EventEmitter<string> = new EventEmitter();
  @Output() onBlurEvent: EventEmitter<string> = new EventEmitter();

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void { }

  public addElement(): void {
    this.addElementEvent.emit(this.control.value);
    this.control.setValue(null);
  }

  public removeElement(element: string): void {
    this.removeElementEvent.emit(element);
  }

  public onBlur(): void {
    this.onBlurEvent.emit(this.control.value);
  }
}
