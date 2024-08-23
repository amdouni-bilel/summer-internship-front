import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { MyCongesService } from '../myconges.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentication/auth.service';
import { Conges } from 'src/app/auth/models/conges';

@Component({
  selector: 'app-add-my-conge',
  templateUrl: './add-myconges.component.html',
  styleUrls: ['./add-myconges.component.scss']
})
export class AddMyCongeComponent implements OnInit {
  congeForm: FormGroup;
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private congesService: MyCongesService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.congeForm = this.fb.group({
      joursCong: [{ value: '', disabled: true }, [Validators.required, Validators.min(1)]],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      type: ['', Validators.required]
    }, { validators: dateLessThan('dateDebut', 'dateFin') });
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (currentUser) => {
        console.log('Current User:', currentUser);
        if (currentUser && currentUser.id) {
          this.currentUser = currentUser;
        } else {
          this.toastr.error('User not logged in');
          this.router.navigate(['/login']);
        }
      },
      error => {
        this.toastr.error('Failed to get current user');
        console.error('Error getting current user:', error);
        this.router.navigate(['/login']);
      }
    );

    this.congeForm.get('dateDebut')?.valueChanges.subscribe(() => this.calculateDaysOff());
    this.congeForm.get('dateFin')?.valueChanges.subscribe(() => this.calculateDaysOff());
  }

  calculateDaysOff() {
    const dateDebut = this.congeForm.get('dateDebut')?.value;
    const dateFin = this.congeForm.get('dateFin')?.value;

    if (dateDebut && dateFin && dateDebut < dateFin) {
      const diffInMs = new Date(dateFin).getTime() - new Date(dateDebut).getTime();
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24) + 1; // Adding 1 to include the start date
      this.congeForm.get('joursCong')?.setValue(diffInDays);
    } else {
      this.congeForm.get('joursCong')?.setValue('');
    }
  }

  submit() {
    if (this.congeForm.valid) {
      const congeData: Partial<Conges> = {
        user: { id: this.currentUser.id },
        joursCong: this.congeForm.get('joursCong')?.value,
        dateDebut: this.congeForm.get('dateDebut')?.value,
        dateFin: this.congeForm.get('dateFin')?.value,
        type: this.congeForm.get('type')?.value
      };

      console.log('Submitting congeData:', congeData);

      this.congesService.createConges(congeData).subscribe(
        response => {
          this.toastr.success('Leave created successfully!');
          this.router.navigate(['/users/list-myconges']);
        },
        error => {
          if (error.error) {
            this.toastr.error(`Error creating leave: ${error.error}`);
          } else {
            this.toastr.error('Error creating leave');
          }
          console.error('Error creating leave:', error);
        }
      );
    } else {
      this.congeForm.markAllAsTouched();
    }
  }

  navigateToListMyConges() {
    this.router.navigate(['/users/list-myconges']);
  }
}

export function dateLessThan(startDateField: string, endDateField: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const startDate = control.get(startDateField)?.value;
    const endDate = control.get(endDateField)?.value;

    if (startDate && endDate && startDate >= endDate) {
      control.get(endDateField)?.setErrors({ dateLessThan: true });
      return { dateLessThan: true };
    }
    return null;
  };
}
