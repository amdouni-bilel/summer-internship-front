import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.sass']
})
export class AddBookingComponent {
  bookingForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      city: [''],
      arriveDate: ['', [Validators.required]],
      departDate: ['', [Validators.required]],
      totalPerson: ['', [Validators.required]],
      roomType: ['', [Validators.required]],
      address: [''],
      uploadImg: [''],
      note: ['']
    });
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
  }
}
