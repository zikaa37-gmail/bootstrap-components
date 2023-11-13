import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalService } from './confirmation-modal.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  cmService = inject(ConfirmationModalService);
  @Input() modalWidth = '500px';
  @Input() modalHeight = '300px';
  @Input() title = 'Change Title';
  @Input() description = 'Change description';
  @Input() leftButtonText = 'Cancel';
  @Input() rightButtonText = 'Confirm';
  @Input() hasCancelButton = true;
  @Input() hasStaticBackdrop = true;
  @Input() preventCloseOnEscape = false;
  @Output() confirmed = new EventEmitter<void>();

  ngOnInit() {
    document.documentElement.style.setProperty(
      '--modalWidth',
      this.modalWidth || '500px'
    );
    document.documentElement.style.setProperty(
      '--modalHeight',
      this.modalHeight || '300px'
    );
  }

  confirm() {
    this.confirmed.emit();
    this.closeModal();
  }

  closeModal() {
    this.cmService.showModal$.next(false);
  }
}
