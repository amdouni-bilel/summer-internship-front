import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.sass'],
})
export class EditBookingComponent {
  bookingForm: FormGroup;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    email: 'test@example.com',
    gender: 'female',
    mobile: '123456789',
    city: 'Surat',
    arriveDate: '2020-02-17T14:22:18Z',
    departDate: '2020-02-19T14:22:18Z',
    totalPerson: '3',
    roomType: 'Delux',
    address: '101, Elanxa, New Yourk',
    uploadImg: '',
    note: 'test commit',
  };
  constructor(private fb: FormBuilder) {
    this.bookingForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      first: [this.formdata.first, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [this.formdata.last],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.formdata.gender, [Validators.required]],
      mobile: [this.formdata.mobile, [Validators.required]],
      city: [this.formdata.city],
      arriveDate: [this.formdata.arriveDate, [Validators.required]],
      departDate: [this.formdata.departDate, [Validators.required]],
      totalPerson: [this.formdata.totalPerson, [Validators.required]],
      roomType: [this.formdata.roomType, [Validators.required]],
      address: [this.formdata.address],
      uploadImg: [this.formdata.uploadImg],
      note: [this.formdata.note]
    });
  }
}
