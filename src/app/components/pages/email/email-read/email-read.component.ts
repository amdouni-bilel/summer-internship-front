import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'angular-calendar';
import { ToastrService } from 'ngx-toastr';
import { MailmanagerService } from 'src/app/administration/mailmanager/mailmanager.service';
import { MailComposeService } from '../email-compose/mail-compose.service';

@Component({
  selector: 'app-email-read',
  templateUrl: './email-read.component.html',
  styleUrls: ['./email-read.component.scss']
})
export class EmailReadComponent implements OnInit {

  constructor( private modal: NgbModal,
    private mailService:MailmanagerService,
      private mailComposeService: MailComposeService,
      private toaster : ToastrService) { }

      connected:any 
      ngOnInit(): void {
        this.listGroups()
        this.allEmails()
        const userString = window.localStorage.getItem('user');
    
        if (userString) {
          this.connected = JSON.parse(userString);
        }
      }
    
    
      emails:any=[]
      allEmails(){
        this.emails=[]

        this.mailComposeService.getallEmails(    
      ).subscribe(data =>{ 
        
        console.log("data, ",data )
        for (let index = 0; index < data.length; index++) {
          if(data[index].from==this.connected.username)
          this.emails.push(data[index])
        }
       
      }
        );
        
      }
    
    
    
    
      groups : any=[];
      listGroups(){
        this.mailService.getallgroups().subscribe(
          res=>{
            this.groups = res;
          }
         
       ) 
      }
    
    
      deleteEmail(id:any){
        this.mailComposeService.deleteEmail(id).subscribe(
          res=>{
            this.toaster.success('Successfully deleted')
            this.allEmails()
          }
         
       ) 
      }
    
    
    
      // popup
    
    @ViewChild('modalContent') modalContent!: TemplateRef<any>;
    modalRef: NgbModalRef | undefined;
    modalData: {
      action: string;
      event: CalendarEvent;
    } = {
      action: '',
      event: null!
    };
    
    
    email:any={}
      handleEvent(email:any, action: string, event: CalendarEvent, contact:any): void {
        this.email=email
        this.modalData = { action, event };
        this.modalRef = this.modal.open(this.modalContent, { size: 'lg' });
    
      }
      
      closePopup(): void {  
        this.modalRef?.close();
      }


   
    
    
    
    }
    