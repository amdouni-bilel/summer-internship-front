import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      joursCong: ['', [Validators.required, Validators.min(1)]],
      dateDebut: ['', Validators.required]
    });
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
  }

  submit() {
    if (this.congeForm.valid) {
      const congeData: Partial<Conges> = {
        user: { id: this.currentUser.id },
        joursCong: this.congeForm.value.joursCong,
        dateDebut: this.congeForm.value.dateDebut
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
