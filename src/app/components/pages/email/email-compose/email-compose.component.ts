import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MailmanagerService } from 'src/app/administration/mailmanager/mailmanager.service';
import { SmtpService } from 'src/app/administration/smtp/smtp.service';
import { VariablesService } from 'src/app/administration/variable/variables.service';
import { MailComposeService } from './mail-compose.service';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.scss']
})
export class EmailComposeComponent implements OnInit {

  coordonneeEmail: FormGroup;

  groupsAndUsers:any=[];


  constructor( private mailService:MailmanagerService,
    private smtpService:SmtpService,
    private mailComposeService: MailComposeService,
    private _formBuilder: FormBuilder,
    private toaster : ToastrService,
    private variableService : VariablesService,
    ) { 

    }

    connected:any
  ngOnInit(): void { 

    const userString = window.localStorage.getItem('user');

    if (userString) {
      this.connected = JSON.parse(userString);
    }


    this.emptyForm()

    this.listGroups()

    this.getAllModels()
  } 


  groups : any=[];
  listGroups(){
    this.mailService.getallgroups().subscribe(
      res=>{
        this.groups = res;
        this.getAllSmtp()
      }
     
   ) 
  }


users:any=[]
  getAllSmtp(){
    this.smtpService.getAllUser().subscribe(
      res=>{
        this.users = res;
        this.users = this.users.map(obj => {
          return {
            nom: obj.email,
            
          };
        });
        this.groupsAndUsers=this.users.concat(this.groups)

      }
     
   ) 
  }


  //file selection
  @ViewChild('labelImport', { static: false }) labelImport: ElementRef;

  fileToUpload: File = null;
  files:any=[]
  onFileChange(files: FileList): void {
    this.files=this.files.concat(files.item(0))

    if (this.labelImport) {
        this.labelImport.nativeElement.innerHTML +=  files.item(0).name + "<br>";
    }
  }




  sentEmail:any=[]
  InboxEmail:any=[]


  allEmails(){
 
    this.mailComposeService.getallEmails(    
  ).subscribe(data =>{ 
    console.log("data = ", data)
  }
    );
    
  }


  emailToSend:any={}
  sendEmail(){
    console.log("coordonnée ", this.coordonneeEmail.value)
    this.emailToSend=this.coordonneeEmail.value     
   // this.emailToSend.from="kefiskander99@gmail.com"
   this.emailToSend.from=this.connected.username
    console.log("email = ", this.emailToSend)
    if(this.coordonneeEmail.valid){
      this.mailComposeService.sendEmail(
        
        this.coordonneeEmail.value     
      
    ).subscribe(data => {
      this.toaster.success('Successfully sent')
      this.allEmails()
      this.emptyForm()

      

    }
  
      
      );
      
    }
   else{
    this.toaster.error('please, fill the form with valid data')

   }

  }




  emptyForm(){
    this.coordonneeEmail = this._formBuilder.group({
      to: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      model: ['',''],
        });
  }




  models:any=[]
  getAllModels(){

    this.variableService.getModel().subscribe(data=>{
      this.models=data
      // data.array.forEach(element => {
      //   this.models=element.description.replace(/<[^>]+>/g, '');
      //   this.models= element.replace(/&nbsp;/, '');
      // });
      
      console.log("data = ", this.models)
    })

  }



  onModelChange(choosedModel:any){

    choosedModel=this.mailComposeService.sanitizeString(choosedModel).toString()

    //storing the styled choosed model in model attribute:
    this.coordonneeEmail.get('model').setValue(choosedModel);

    //removing the html tags from the choosed model
   
   
    this.coordonneeEmail.get('message').setValue(choosedModel);

  }


 
} 
 