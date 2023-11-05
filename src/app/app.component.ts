import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './FEATURES/input-field/input-field.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ButtonType,
  ButtonVisualType,
} from './SHARED/models/button-types.model';
import { ButtonComponent } from './FEATURES/button/button.component';
import { SelectComponent } from './FEATURES/select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    InputFieldComponent,
    ButtonComponent,
    SelectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(3)]],
    age: [null, [Validators.required, Validators.min(18), Validators.max(99)]],
    company: [null, [Validators.required]],
  });
  ButtonVisualType = ButtonVisualType;
  ButtonType = ButtonType;
  companies = [
    { name: 'VIP Mobile', value: 'vip' },
    { name: 'Telenor', value: 'telenor' },
    { name: 'MTS', value: 'mts' },
  ];
  preselectedCompany = new FormControl('vip');

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.addLangs(['sr']);
    this.form.valueChanges.subscribe((value) => console.log(value));
  }

  onPasswordIconClicked($event: MouseEvent) {
    console.log($event);
  }

  onNameKeyUp($event: KeyboardEvent) {
    console.log($event);
  }

  onNameEnterPressed($event: void) {
    console.log('Enter pressed');
  }

  onButtonClick() {
    console.log('Button clicked');
  }
}
