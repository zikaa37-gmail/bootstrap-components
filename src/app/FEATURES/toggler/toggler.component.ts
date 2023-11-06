import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
})
export class TogglerComponent {
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) name!: string;
  @Input({ required: false }) label?: string;
  @Input({ required: false }) togglerColor?: string; // = '#ffff00';
  @Input({ required: false }) togglerBgColor?: string; // = '#00ddff';
  @Input({ required: false }) selected!: boolean;
  @Input({ required: false }) disabled?: boolean;
  @Output() togglerClicked = new EventEmitter<{
    name: string;
    value: boolean;
  }>();

  ngOnInit() {
    document.documentElement.style.setProperty(
      '--togglerColor',
      this.togglerColor || 'red'
    );
    document.documentElement.style.setProperty(
      '--togglerBgColor',
      this.togglerBgColor || 'blue'
    );
  }
}
