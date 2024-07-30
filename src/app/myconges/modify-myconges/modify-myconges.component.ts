import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  congeId: number;
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private congesService: MyCongesService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.congeForm = this.fb.group({
      joursCong: ['', [Validators.required, Validators.min(1)]],
      dateDebut: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.congeId = +params.get('id');
      console.log('Conge ID:', this.congeId);  
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
  }

  loadCongeDetails(id: number) {
    this.congesService.getCongeById(id).subscribe(
      conge => {
        console.log('Loaded Conges:', conge);  
        this.congeForm.patchValue({
          joursCong: conge.joursCong,
          dateDebut: conge.dateDebut
        });
      },
      error => {
        this.toastr.error('Failed to load leave details');
        console.error('Error loading leave details:', error);
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
