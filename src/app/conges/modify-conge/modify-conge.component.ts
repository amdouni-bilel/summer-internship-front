import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CongesService } from '../conges.service';
import { UsersService } from '../../users/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { UserView } from '../../auth/models/user-view';
import { Conges } from 'src/app/auth/models/conges';

@Component({
  selector: 'app-modify-conge',
  templateUrl: './modify-conge.component.html',
  styleUrls: ['./modify-conge.component.scss']
})
export class ModifyCongeComponent implements OnInit {
  congeForm: FormGroup;
  users: UserView[] = [];
  congeId: number;
  userId: number;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private congesService: CongesService,
    private userService: UsersService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.congeForm = this.fb.group({
      userId: ['', Validators.required],
      joursCong: ['', [Validators.required, Validators.min(1)]],
      dateDebut: ['', Validators.required],
      confirmed: [false]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.congeId = +params.get('id');
      this.loadCongeDetails(this.congeId);
      this.loadUsers();
    });
  }

  loadCongeDetails(id: number) {
    this.congesService.getCongeById(id).subscribe(
      conge => {
        this.congeForm.patchValue({
          userId: conge.user.id,
          joursCong: conge.joursCong,
          dateDebut: conge.dateDebut,
          confirmed: conge.confirmed
        });
        this.userId = conge.user.id; // Store the user ID for reference
      },
      error => {
        this.toastr.error('Failed to load leave details');
        console.error('Error loading leave details:', error);
      }
    );
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

      this.congesService.updateConge(this.congeId, congeData).subscribe(
        response => {
          this.toastr.success('Leave updated successfully!');
          this.router.navigate(['/users/list-conges']);
        },
        error => {
          this.toastr.error('Solde de jours de congés insuffisant');
          console.error('Error updating leave:', error);
        }
      );
    }
  }

  navigateToListConges() {
    this.router.navigate(['/users/list-conges']);
  }
}
