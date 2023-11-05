import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class ErrorMessageComponent implements OnChanges {
  @Input() errors!: any;
  @Input() displaySingleError = true;
  filteredErrors: any[] = [];
  filteredErrorKeys: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['errors']) {
      this.errors = changes['errors'].currentValue;
      this.filteredErrorKeys = Object.keys(this.errors).map(
        (keyError) => keyError
      );
    }
  }
}
