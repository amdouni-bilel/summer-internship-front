import { Component, OnInit } from '@angular/core';
import { FichierService } from '../fichier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {
  user: any;
  username: any;
  resultat:any;
  constructor(private Service: FichierService,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
    this.GetByMailReceiverAndMailCheckedAndMailShared();
  }

  GetByMailReceiverAndMailCheckedAndMailShared() {
    this.Service.GetByMailReceiverAndMailCheckedAndMailShared(this.username,0,0).subscribe(
      (response) => {
        this.resultat = response;
        console.log("resultat = ", this.resultat);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  share(id:any){
this.Service.Shared(id,5).subscribe(
  () => {
    this.toaster.success('Invitation acceptée avec succès!');
    this.GetByMailReceiverAndMailCheckedAndMailShared();
  },
  error => {
    console.error('Error:', error);
  }
)
  }
  delete(id:any){
    this.Service.delete(id).subscribe(
      () => {
        this.toaster.success('Invitation refusée !');
        this.GetByMailReceiverAndMailCheckedAndMailShared();
      },
      error => {
        console.error('Error:', error);
      }
    )
      }

}
