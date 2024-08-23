import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCongesService } from '../myconges.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentication/auth.service';
import { Conges } from 'src/app/auth/models/conges';

@Component({
  selector: 'app-modify-my-conge',
  templateUrl: './modify-myconges.component.html',
  styleUrls: ['./modify-myconges.component.scss']
})
export class ModifyMyCongeComponent implements OnInit {
  congeForm: FormGroup;
  currentUser: any;
  congeId: number;

  constructor(
    private fb: FormBuilder,
    private congesService: MyCongesService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
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
    this.route.paramMap.subscribe(params => {
      this.congeId = +params.get('id');
      this.loadCongeDetails(this.congeId);
    });

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

  loadCongeDetails(id: number) {
    this.congesService.getCongeById(id).subscribe(
      conge => {
        this.congeForm.patchValue({
          joursCong: conge.joursCong,
          dateDebut: conge.dateDebut,
          dateFin: conge.dateFin,
          type: conge.type
        });
      },
      error => {
        this.toastr.error('Failed to load leave details');
        console.error('Error loading leave details:', error);
      }
    );
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

      this.congesService.updateConge(this.congeId, congeData).subscribe(
        response => {
          this.toastr.success('Leave updated successfully!');
          this.router.navigate(['/users/list-myconges']);
        },
        error => {
          if (error.error) {
            this.toastr.error(`Error updating leave: ${error.error}`);
          } else {
            this.toastr.error('Error updating leave');
          }
          console.error('Error updating leave:', error);
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
