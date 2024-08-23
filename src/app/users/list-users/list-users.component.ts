import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';
import { UserView } from '../../auth/models/user-view';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MissionService } from 'src/app/missions/mission.services';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  columns = [
    { prop: 'username', name: 'Email' },
    { prop: 'fullName', name: 'Full Name' },
    { prop: 'roles', name: 'Roles' }
  ];
  loadingIndicator: boolean = true;
  users: UserView[] = [];
  filteredUsers: UserView[] = [];
  searchTerm: string = '';
  reorderable: any;
  missions: any[] = [];

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private userService: UsersService,
    private missionService: MissionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsersWithRoles().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      this.loadingIndicator = false;
    });
    this.loadMissions();
  }
  loadMissions() {
    this.missionService.getAllMissions().subscribe(missions => {
      this.missions = missions;
    }, error => {
      console.error('Error loading missions:', error);
    });
  }

  addUser() {
    const newUser: UserView = {
      id: null,
      username: 'newuser',
      fullName: 'New User',
      password: 'password',
      roles: ['ROLE_USER']
    };

    this.userService.createUser(newUser).subscribe(user => {
      this.users.push(user);
      this.filteredUsers.push(user);
      this.toastr.success('User added successfully!');
    }, error => {
      this.toastr.error('Failed to add user');
    });
  }

  deleteUser(userId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(userId).subscribe(() => {
          this.users = this.users.filter(user => user.id !== userId);
          this.filteredUsers = this.filteredUsers.filter(user => user.id !== userId);
          this.toastr.success('User deleted successfully!');
        }, error => {
          this.toastr.error('Failed to delete user');
          console.error('Error deleting user:', error);
        });
      }
    });
  }

  navigateToAddUser() {
    this.router.navigate(['/users/add-user']);
  }

  navigateToModifyUser(id: number) {
    this.router.navigate(['/users/modify-user', id]);
  }

  applyFilter() {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(searchTerm) ||
      user.fullName.toLowerCase().includes(searchTerm)
    );
  }

  generatePdf() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('LIST OF USERS', 14, 22);

    autoTable(doc, {
      startY: 30,
      head: [['Email', 'Full Name', 'Roles']],
      body: this.filteredUsers.map(user => [
        user.username,
        user.fullName,
        Array.isArray(user.roles) ? user.roles.join(', ') : user.roles
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: [255, 255, 255],
        fontSize: 12,
        halign: 'center'
      },
      bodyStyles: {
        fontSize: 10,
        cellPadding: 3,
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      styles: {
        halign: 'center'
      },
      columnStyles: {
        0: { halign: 'left' },
        2: { halign: 'left' }
      }
    });

    doc.save('users-list.pdf');
  }

  assignMission(userId: number) {
    this.userService.getMissionsByUserId(userId).subscribe(assignedMissions => {
      const assignedMissionIds = new Set(assignedMissions.map(mission => mission.id));

      const missionOptions = this.missions.map(mission => ({
        text: mission.name,
        value: mission.id
      }));

      Swal.fire({
        title: 'Select a Mission',
        input: 'select',
        inputOptions: missionOptions.reduce((acc, option) => {
          acc[option.value] = option.text;
          return acc;
        }, {}),
        inputPlaceholder: 'Select a mission',
        showCancelButton: true,
        confirmButtonText: 'Assign',
        cancelButtonText: 'Cancel',
        preConfirm: (selectedMissionId) => {
          if (!selectedMissionId) {
            Swal.showValidationMessage('You need to select a mission');
          }
          return selectedMissionId;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const missionId = result.value;
          if (missionId) {
            if (assignedMissionIds.has(missionId)) {
              this.toastr.error('This mission is already assigned to the user');
            } else {
              this.userService.assignMissionToUser(userId, missionId).subscribe(response => {
                this.toastr.success('Mission assigned successfully!');
              }, error => {
                this.toastr.error('Failed to assign mission');
                console.error('Error assigning mission:', error);
              });
            }
          } else {
            this.toastr.error('No mission selected');
          }
        }
      });
    }, error => {
      this.toastr.error('Failed to retrieve missions');
      console.error('Error retrieving missions:', error);
    });
  }

  showAssignedMissions(userId: number) {
    this.userService.getMissionsByUserId(userId).subscribe(missions => {
      console.log('Missions:', missions);

      const missionNames = new Set<string>();

      (missions as any[]).forEach(missionUser => {
        if (missionUser && missionUser.missionName) {
          missionNames.add(missionUser.missionName);
        }
      });

      const missionList = Array.from(missionNames).map(name =>
        `<li> ${name}</li>`
      ).join('');

      Swal.fire({
        title: 'Assigned Missions',
        html: `<ul>${missionList}</ul>`,
        icon: 'info',
        confirmButtonText: 'Close'
      });
    }, error => {
      this.toastr.error('Failed to retrieve missions');
      console.error('Error retrieving missions:', error);
    });
  }



}
