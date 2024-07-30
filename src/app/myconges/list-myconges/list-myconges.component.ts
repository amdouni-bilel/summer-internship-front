import { Component, OnInit } from '@angular/core';
import { MyCongesService } from '../myconges.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Conges } from 'src/app/auth/models/conges';
import { AuthService } from 'src/app/authentication/auth.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-list-my-conges',
  templateUrl: './list-myconges.component.html',
  styleUrls: ['./list-myconges.component.scss']
})
export class ListMyCongesComponent implements OnInit {
  loadingIndicator: boolean = true;
  conges: Conges[] = [];
  filteredConges: Conges[] = [];
  searchTerm: string = '';

  constructor(
    private congesService: MyCongesService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService 
  ) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (currentUser) => {
        if (currentUser) {
          this.congesService.getCongesByUser(currentUser.id).subscribe(
            (conges: Conges[]) => {
              this.conges = conges;
              this.filteredConges = conges;
              this.loadingIndicator = false;
              console.log("List of My Conges:", this.conges);
            },
            error => {
              this.toastr.error('Failed to load leaves');
              console.error('Error loading leaves:', error);
            }
          );
        } else {
          this.toastr.error('User not logged in');
          this.router.navigate(['/auth/login']);
        }
      },
      error => {
        this.toastr.error('Failed to get current user');
        console.error('Error getting current user:', error);
        this.router.navigate(['/auth/login']);
      }
    );
  }

  applyFilter() {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredConges = this.conges.filter(conge =>
      conge.dateDebut.toLowerCase().includes(searchTerm) ||
      (conge.confirmed ? 'Yes' : 'No').toLowerCase().includes(searchTerm)
    );
  }

  deleteConge(congeId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this leave!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.congesService.deleteConge(congeId).subscribe(() => {
          this.conges = this.conges.filter(conge => conge.id !== congeId);
          this.filteredConges = this.filteredConges.filter(conge => conge.id !== congeId);
          this.toastr.success('Leave deleted successfully!');
        }, error => {
          this.toastr.error('Failed to delete leave');
          console.error('Error deleting leave:', error);
        });
      }
    });
  }

  confirmConge(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to confirm this leave?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.congesService.confirmConge(id).subscribe(
          response => {
            const conge = this.conges.find(c => c.id === id);
            if (conge) {
              conge.confirmed = true;
            }
            this.toastr.success('Leave confirmed successfully!');
          },
          error => {
            this.toastr.error('Error confirming leave');
            console.error('Error confirming leave:', error);
          }
        );
      }
    });
  }

  navigateToModifyConge(id: number) {
    this.router.navigate(['/users/modify-myconge', id]);
  }
  navigateToAddMyConge() {
    this.router.navigate(['/users/add-myconge']);
  }
  generatePdf() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('LIST OF MY CONGES', 14, 22);

    autoTable(doc, {
      startY: 30,
      head: [['User', 'Days', 'Start Date', 'Confirmed']],
      body: this.filteredConges.map(conge => [
        conge.user.fullName,
        conge.joursCong,
        conge.dateDebut,
        conge.confirmed ? 'Yes' : 'No'
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
        0: { halign: 'left' }
      }
    });

    doc.save('my-conges-list.pdf');
  }
}
