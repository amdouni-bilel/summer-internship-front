import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { CongesService } from '../conges.service';
import { UsersService } from '../../users/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { UserView } from '../../auth/models/user-view';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.scss']
})
export class AddCongeComponent implements OnInit {
  congeForm: FormGroup;
  users: UserView[] = [];
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private congesService: CongesService,
    private userService: UsersService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.congeForm = this.fb.group({
      userId: ['', Validators.required],
      joursCong: ['', [Validators.required, Validators.min(1)]],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      type: ['', Validators.required],
      confirmed: [false]
    }, { validators: dateLessThan('dateDebut', 'dateFin') });
  }

  ngOnInit() {
    this.loadUsers();
    this.onDateChange();
  }

  loadUsers() {
    this.userService.getUsersWithRoles().subscribe(
      users => {
        this.users = users;
      },
      error => {
        this.toastr.error('Failed to load users');
        console.error('Error loading users:', error);
      }
    );
  }

  onDateChange() {
    this.congeForm.get('dateDebut')?.valueChanges.subscribe(() => {
      this.calculateDaysOff();
    });
    this.congeForm.get('dateFin')?.valueChanges.subscribe(() => {
      this.calculateDaysOff();
    });
  }

  calculateDaysOff() {
    const dateDebut = this.congeForm.get('dateDebut')?.value;
    const dateFin = this.congeForm.get('dateFin')?.value;

    if (dateDebut && dateFin) {
      const startDate = new Date(dateDebut);
      const endDate = new Date(dateFin);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Adding 1 to include both start and end dates

      if (daysDiff > 0) {
        this.congeForm.get('joursCong')?.setValue(daysDiff);
      } else {
        this.congeForm.get('joursCong')?.setValue('');
      }
    } else {
      this.congeForm.get('joursCong')?.setValue('');
    }
  }

  submit() {
    this.submitted = true;
    if (this.congeForm.valid) {
      const congeData = {
        user: { id: this.congeForm.value.userId },
        joursCong: this.congeForm.get('joursCong')?.value,
        dateDebut: this.congeForm.value.dateDebut,
        dateFin: this.congeForm.value.dateFin,
        type: this.congeForm.value.type,
        confirmed: this.congeForm.value.confirmed
      };

      this.congesService.createConge(congeData).subscribe(
        response => {
          this.toastr.success('Leave added successfully!');
          this.router.navigate(['/users/list-conges']);
        },
        error => {
          this.toastr.error('Solde de jours de congés insuffisant');
          console.error('Error adding leave:', error);
        }
      );
    }
  }

  navigateToListConges() {
    this.router.navigate(['/users/list-conges']);
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
