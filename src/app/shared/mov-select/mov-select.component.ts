import { Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'src/app/core/utils/control-value-accesor-connector';
import { IdValue } from 'src/app/models';

@Component({
  selector: 'mov-select',
  templateUrl: './mov-select.component.html',
  styleUrls: ['./mov-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MovSelectComponent), multi: true
  }]
})
export class MovSelectComponent extends ControlValueAccessorConnector implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() options: Array<IdValue>;
  @Input() selectedOptions: Array<IdValue> = [];
  @Input() multiOption: boolean = false;
  @Input() required: boolean = false;
  @Output() addOptionEvent: EventEmitter<IdValue> = new EventEmitter();
  @Output() removeOptionEvent: EventEmitter<IdValue> = new EventEmitter();

  public showOptions: boolean = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void { }

  public toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  public addOption(option: IdValue): void {
    this.addOptionEvent.emit({ ...option, selected: true });
  }

  public removeOption(option: IdValue): void {
    this.removeOptionEvent.emit(option);
  }
}
