import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonType,
  ButtonVisualType,
} from 'src/app/SHARED/models/button-types.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: false }) type = ButtonType.BUTTON;
  @Input({ required: false }) visualType = ButtonVisualType.PRIMARY;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) buttonText!: string;
  @Input({ required: false }) iconBefore!: string;
  @Input({ required: false }) iconAfter!: string;
  @Output() buttonClicked = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClicked.emit();
  }
}
