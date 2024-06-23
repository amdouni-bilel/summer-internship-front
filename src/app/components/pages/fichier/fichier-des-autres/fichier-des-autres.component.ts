import { Component, OnInit } from '@angular/core';
import { FichierService } from '../fichier.service';

@Component({
  selector: 'app-fichier-des-autres',
  templateUrl: './fichier-des-autres.component.html',
  styleUrls: ['./fichier-des-autres.component.scss']
})
export class FichierDesAutresComponent implements OnInit {

  constructor(private Service: FichierService) { }
  user: any;
  username: any;
  object: any;
  resultat: any[] = [];
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
   
    this.GetByMailReceiverAndMailCheckedAndMailShared();
  }
  GetByMailReceiverAndMailCheckedAndMailShared() {
    this.Service.GetByMailReceiverAndMailCheckedAndMailShared(this.username,1,1).subscribe(
      (response) => {
        this.resultat = response;
        console.log("resultat = ", this.resultat);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
