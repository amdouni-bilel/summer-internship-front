import { Component, OnInit } from '@angular/core';
import { FichierService } from '../fichier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-fichier-partages',
  templateUrl: './fichier-partages.component.html',
  styleUrls: ['./fichier-partages.component.scss']
})
export class FichierPartagesComponent implements OnInit {
  user: any;
  username: any;
  object: any;
  resultat: any[] = [];

  s3Objects: any[] = [];
  objectStructure: any = {};
  buckets: any[] = [];
  objectStructureKeys: string[]; // Array to hold the keys for ngFor
  newFolderCoord: FormGroup;
  form: FormGroup;



  constructor(private Service: FichierService,
    private awsService: FichierService,
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    private toaster: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
   console.log("usename" , this.username)
    this.GetByMailSenderAndMailCheckedAndMailShared();

    const userString = window.localStorage.getItem('user');

    if (userString) {
      this.user = JSON.parse(userString);
    }

    this.newFolderCoord = this._formBuilder.group({
      name: ['', Validators.required],
    });

    this.loadObjectStructure()
    setTimeout(() => {

    }, 6000);
    console.log(this.objectStructure)
  }

  GetByMailSenderAndMailCheckedAndMailShared() {
    this.Service.GetByMailSenderAndMailCheckedAndMailShared(this.username,1,1).subscribe(
      (response) => {
        this.resultat = response;
        console.log("resultat = ", this.resultat);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }



  getAllS3Objects(): void {
    this.awsService.getAllS3Objects().subscribe(
      data => {
        this.s3Objects = data;
      },
      error => {
        console.error('Error fetching S3 objects:', error);
      }
    );
  }

  // getObjectStructure(): void {
  //   this.awsService.getObjectStructure().subscribe(
  //     data => {
  //       console.log("data",data)
  //       this.objectStructure = data;
  //       this.objectStructureKeys = Object.keys(this.objectStructure);

  //     },
  //     error => {
  //       console.error('Error fetching object structure:', error);
  //     }
  //   );
  // }

  getAllBuckets(): void {
    this.awsService.getAllBuckets().subscribe(
      data => {
        this.buckets = data;
      },
      error => {
        console.error('Error fetching buckets:', error);
      }
    );
  }

  // Upload a file

  // Delete an object
  deleteObject(): void {
    console.log("object= ",this.objectToDelete)
    this.awsService.deleteObject(this.objectToDelete).subscribe(
      response => {
        console.log('Object deleted successfully:', response);
        // Refresh the list of S3 objects or object structure if needed
        this.getAllS3Objects();
        this.loadObjectStructure();
        this.goBack()
      },
      error => {
        this.goBack()
        this.toaster.success('Dossier crée avec succès!');
      }
    );
    this.objectToDelete=""
  }

  // Copy or move a file
  moveOrCopy:any=false
  cmTo:any=""
  cmFrom:any=""
  cming:boolean=false
  copyOrMoveFile(selected:any): void {
    console.log(this.moveOrCopy, "from ",this.cmFrom, " to ", this.currentParentFolder+selected)
    this.awsService.copyOrMoveFile(this.cmFrom,this.currentParentFolder+selected, this.moveOrCopy).subscribe(
      response => {
        // Refresh the list of S3 objects or object structure if needed
        this.getAllS3Objects();
        this.loadObjectStructure();
        this.toaster.success('Dossier crée avec succès!');
        this.goBack()

      },
      error => {
        this.toaster.success('Dossier crée avec succès!');
        this.goBack()

      }
    );
    this.cmTo=""
    this.cming=false
  }




  objectStructure$: Observable<any>;
  currentFolderLevel: string[] = [];
  currentParentFolder:any=""
  isFile: boolean = null;
  selectedFile: File | undefined;
  canSelectFile:boolean=false
  typeFolderName:boolean=true
  objectToDelete:any=""
  fileSource:any=""
  filteredObject$: Observable<any>;
  searchQuery: string = '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if(this.selectedFile!=undefined && this.selectedFile!=null){
      this.isFile=true
      this.newFolderCoord.setValue({
        name: this.currentFolderLevel
      });
    }
    if(!this.newFolderCoord.valid && this.isFile==null)
       this.toaster.error('Veuillez saisir le nom ?');
else{

console.log("size = ", this.selectedFile.size)

if(this.selectedFile!= null && this.selectedFile!=undefined && this.selectedFile.size>25000000){
  this.toaster.error("Vous avez dépassé(e) 25MO");
}else{

  this.awsService.uploadFileOrFolder(this.newFolderCoord.get('name').value, this.isFile, this.selectedFile)
  .subscribe(
    response => {
      this.toaster.success('Dossier crée avec succès!');
      this.goBack()
    },
    error => {
      console.error('Upload error:', error);
      this.toaster.success('Dossier crée avec succès!');
      this.goBack()
    }
  );
}
}
this.modalService.dismissAll()

      this.isFile=null
      this.selectedFile=undefined
  }

  loadObjectStructure(): void {
    this.objectStructure$ = this.awsService.getObjectStructureInvitedShared();
    this.filteredObject$ = this.objectStructure$;
    this.objectStructure$.subscribe(e=>{
      console.log("e = ",e)
    })
  }

  applyFilter(): void {
    if (!this.searchQuery) {
      this.filteredObject$ = this.objectStructure$; // Reset filter if query is empty
    } else {
      this.filteredObject$ = this.objectStructure$.pipe(
        map(data => {
          const filteredData = {};

          // Apply your filtering logic here based on the 'searchQuery'
          // For example, you could filter properties that match the query
          for (const key in data) {
            if (data.hasOwnProperty(key) && key.includes(this.searchQuery)) {
              filteredData[key] = data[key];
            }
          }

          return filteredData;
        })
      );
    }
  }

  goBack(): void {
    this.canSelectFile=false
    this.loadObjectStructure();
    this.currentParentFolder=""
  }

  navigateToSubFolder(subFolder: string): void {
    this.canSelectFile=true
    this.currentParentFolder=this.currentParentFolder+subFolder+"/"
    this.currentFolderLevel.push(subFolder);
    console.log("current= ", this.currentParentFolder)
    this.objectStructure$ = this.objectStructure$.pipe(map(data => data[subFolder]));
        this.filteredObject$ = this.objectStructure$; // Initialize with original data

  }




  downloadZip(subFolder: string) {
console.log("sub", subFolder);
    this.awsService.downloadAndZipFiles(subFolder).subscribe(
      response => {
        this.handleDownloadResponse(response);
        this.toaster.success('Dossier crée avec succès!');
        this.goBack()

      },
      error => {
        this.goBack()
        this.toaster.success('Dossier crée avec succès!');
      }
    );
  }

  private handleDownloadResponse(response: HttpResponse<Blob>) {
    const blob = new Blob([response.body], { type: 'application/zip' });

    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'files.zip';
    downloadLink.click();
    window.URL.revokeObjectURL(downloadLink.href);
  }


  openOrgModal(orgModal,objectToDelete,action:any,sourceKey:any,selectedFile:any) {
    this.objectToDelete=""
    this.fileSource=""
   this.modalService.open(orgModal, { size: 'sm' });

   if(selectedFile!=null)
   this.fileToShare=this.currentParentFolder+selectedFile

   if(this.currentParentFolder!=""){
    this.objectToDelete=this.currentParentFolder+objectToDelete+"/"
   }else{
    this.objectToDelete=objectToDelete+"/"
   }
   this.moveOrCopy=action
   this.fileSource=sourceKey

  }

  // start point for selecting the destination
  startcming(action:any,sourceKey:any) {
    this.cming=true
   this.moveOrCopy=action
   if(this.currentParentFolder!=""){
    this.cmFrom=this.currentParentFolder+sourceKey
   }else{
    this.cmFrom=sourceKey
   }

   }

   fileRecieverEmail:string=""
   fileToShare:any
   shareFileModal(orgModal, selectedFile:any) {
    this.fileToShare=this.currentParentFolder+selectedFile
    console.log("selected file path= ", this.fileToShare)
    this.modalService.open(orgModal, { size: 'sm' });
   }

   shareFile(){
    console.log("from ",this.user.username,"to ", this.fileRecieverEmail," file ",this.fileToShare)

    this.form = this.fb.group({
      mailSender: [this.user.username],
      mailReceiver: [this.fileRecieverEmail],
      fileKey: [this.fileToShare]
    });
    console.log("form =",this.form.value)
    this.awsService.shareFile(this.form.value).subscribe(()=>{
      this.toaster.success('Invitation effectuer avec succès!');

    })
   }




}
