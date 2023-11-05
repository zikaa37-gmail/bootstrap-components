import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ErrorMessageComponent } from 'src/app/SHARED/ui/error-message/error-message.component';
import { FieldType } from 'src/app/SHARED/ui/error-message/models/field-types.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ErrorMessageComponent,
  ],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  translate = inject(TranslateService);
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) name!: string;
  @Input({ required: false }) type = 'text';
  @Input({ required: false }) label?: string;
  @Input({ required: false }) iconBefore?: string;
  @Input({ required: false }) iconAfter?: string;
  @Input({ required: false }) iconAfterHide?: string;
  @Input({ required: false }) placeholder?: string;
  @Input({ required: false }) isReadOnly: boolean = false;
  @Input({ required: false }) hasErrorValidation = true;
  @Input({ required: false }) isShowHide: boolean = false;
  @Output() iconClicked = new EventEmitter<MouseEvent>();
  @Output() keyupValue = new EventEmitter<KeyboardEvent>();
  @Output() enterPressed = new EventEmitter<void>();
  showFieldContent = false;
  Validators = Validators;

  onIconClick($event: MouseEvent) {
    console.log($event);
    this.iconClicked.emit($event);
  }

  showHide() {
    if (this.control.value?.length) {
      this.showFieldContent = !this.showFieldContent;
      this.type = this.showFieldContent ? FieldType.TEXT : FieldType.PASSWORD;
    }
  }

  onKeyUp($event: any) {
    const value = $event.target?.value;
    if ($event.key === 'Enter') {
      this.keyupValue.emit(value);
      this.enterPressed.emit();
    } else {
      this.keyupValue.emit(value);
    }
  }
}
