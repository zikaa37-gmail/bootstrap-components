import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ErrorMessageComponent } from '../error-message/error-message.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from './select.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], //ErrorMessageComponent
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  translate = inject(TranslateService);
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) name!: string;
  @Input({ required: false }) label?: string;
  @Input({ required: false }) placeholder?: string;
  @Input({ required: false }) items!: SelectItem[];
  @Input({ required: false }) preselectedItem?: FormControl;
  @Input({ required: false }) hasErrorValidation = true;
  @Input({ required: false }) isMultiple = false;
  @Output() selectChanged = new EventEmitter<SelectItem>();
  selectedItem: SelectItem = {
    name: this.translate.instant('select.selectOption'),
    value: '',
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.preselectedItem?.currentValue) {
      const selected = changes?.preselectedItem?.currentValue.value;
      const exist = this.items.find((item) => item.value === selected);
      this.selectedItem = exist || { name: 'Select an option', value: '' };
    }
  }

  onChange($event: any) {
    this.selectChanged.emit($event.target.value);
  }

  setValue(value: any) {
    this.control.setValue(value);
    this.selectedItem = this.items.find((item) => item.value === value)!;
    this.selectChanged.emit(value);
  }
}
