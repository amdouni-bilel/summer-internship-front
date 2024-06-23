import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditfraisComponent } from '../editfrais/editfrais.component';
import { OcrService } from '../ocr.service';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {
  isDraggedOver = false;
  uploadedFiles: any[] = [];

  containers: any[] = [
  ];


  constructor(private dialog: MatDialog, private service :OcrService) {}

  ngOnInit(): void {

    this.service.getResultList().subscribe(resultList => {
      this.containers = resultList;
    });
    
  }

  isChecked: boolean = false;
  userText
 
  onFileSelected(event: any) {
    this.isDraggedOver = false;
    const files: FileList = event.target.files;
    this.saveFiles(files);
  }

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    this.isDraggedOver = false;
    const files: FileList | null = event.dataTransfer?.files;
    if (files) {
      this.saveFiles(files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'copy'; 
    this.isDraggedOver = true;
  }
  
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDraggedOver = false;
  }

  saveFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
      this.service.convertToBytes(files[i])
      .then((byteString: string) => {
        
        this.service.imagesback.push(byteString)
        console.log(this.service.imagesback)
      })
      .catch((error: any) => {
        console.error(error);
      });
      
    }
    
  }

  onDeleteImage(file: any) {
    const index = this.uploadedFiles.indexOf(file);
    if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
    }
  }

  deleteContainer(container: any) {
    const index = this.containers.indexOf(container);
    if (index !== -1) {
      this.containers.splice(index, 1);
    }
  }

  togglePopup(){
    const dialogRef = this.dialog.open(EditfraisComponent);
    dialogRef.afterClosed().subscribe(result => {
     console.log(this.service.getfrais())
    
    });
  }

  saveComment(){
    this.service.addComment(this.userText);
    this.userText = '';
  }
}