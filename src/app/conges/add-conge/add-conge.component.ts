import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      confirmed: [false]
    });
  }

  ngOnInit() {
    this.loadUsers();
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

  submit() {
    this.submitted = true;
    if (this.congeForm.valid) {
      const congeData = {
        user: { id: this.congeForm.value.userId },
        joursCong: this.congeForm.value.joursCong,
        dateDebut: this.congeForm.value.dateDebut,
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
