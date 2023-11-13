import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationModalService {
  showModal$ = new BehaviorSubject<boolean>(true);
}
