import { Component, OnInit } from '@angular/core';
import { VariablesService } from './variables.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { MailComposeService } from 'src/app/components/pages/email/email-compose/mail-compose.service';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {

  public Editor = ClassicEditor;
  //model:any;
  coordonneeModel: FormGroup;
  plainTextContent: string;
  Sauvegarder:any;
  variables: any[] = [];
  user: any;
  public editorContent = '';
  nom = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '300px',
      maxHeight: 'auto',
      width: 'auto',

};
  constructor(   
     private mailComposeService: MailComposeService,
    private toaster : ToastrService,private variablesService : VariablesService ,  private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const userString = window.localStorage.getItem('user');

    if (userString) { 
      this.user = JSON.parse(userString);
    }

    this.getVariables(this.user.username);
    this.getModel();
    this.Sauvegarder=true;
    console.log("sau",this.Sauvegarder)
    this.coordonneeModel = this._formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],

    });

  }

  onDragStart(event: DragEvent, variable: any) {
    this.nom = '{{'+variable.nom+'}}';
    console.log('Drag started:', this.nom);
    event.dataTransfer?.setData('text/plain', this.nom);
  }

  onDrop(event: any) {

    event.preventDefault();
    const variable = event.dataTransfer?.getData('text/plain');
    this.editorContent= this.editorContent +" "+ variable;
    this.coordonneeModel.get('description').setValue(this.editorContent);
    console.log('Drop event:', variable);
    console.log('content : ', this.editorContent);

  }

  onDragOver(event: DragEvent) {
    console.log('Drag over event:', event);
    event.preventDefault();
  }

  onEditorReady(editor: any) {
    console.log('Editor ready:', editor);
    editor.editing.view.document.on('drop', (event: any, data: any) => {
      event.stop();
    });
  }
  onItemDrop(event: any) {
    console.log('Item drop event:', event.item.data);
    const draggedItem = event.item.data;
    const currentContent = this.editorContent;
    this.editorContent = currentContent ? `${currentContent} ${draggedItem}` : draggedItem;

  }
  getVariables(user: string) {
    this.variablesService.getVariablesByUser(user)
      .subscribe(
        (response) => {
          this.variables = response;
          console.log('Variables:', this.variables);
        },
        (error) => {
          console.error('Failed to fetch variables:', error);
        }
      );
  }
  public onReady(editor) {
    const content = editor.getData();

    this.coordonneeModel.get('description').setValue(content);

    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }
  model: Array<{ idmodel:string ;nom: String; description: number }>=[];


  newDescription:any
   getModel(){

    this.variablesService.getModel().subscribe
  (data =>{
this.model.splice(0, this.model.length);
          data.forEach((element) => {
         //   element.description=this.mailComposeService.sanitizeString(element.description).toString()
          });

          this.model=data

          });


  }
  addModel(){

    this.variablesService.addModel(

      this.coordonneeModel.value
  ).subscribe(data => { this.toaster.success('Successfully Registered')
    this.getModel()
  console.log("data = ",data)

});

  }


  //********  DELETE  **********/

  delete(id:any){
    this.variablesService.deleteModel(id).subscribe((data) =>
      {
      // this.toaster.success('Successfully Deleted')
      // this.getModel()
      },(error)=>{

        this.toaster.success('Successfully Deleted');
          this.getModel()
      }
      );
  }


  model2:any;
patch(id:any){
  this.variablesService.getModelById(id).subscribe(data =>
    {
      this.model2=data;
      console.log("model2",this.model2)
      this.patchform();
      this.Sauvegarder=false;

    // this.toaster.success('Successfully Deleted')
    // this.getModel()
    });
}
patchform() {
  this.coordonneeModel.patchValue({
    nom: this.model2.nom,
    description: this.model2.description,

  })
}
update(){
  this.variablesService.updateModel(this.coordonneeModel.value,this.model2.idmodel).subscribe(data =>
    {

      console.log("update 200 ok = ",data);

    });
  this.Sauvegarder=true;
  this.coordonneeModel.reset();
  console.log("test model2",this.model2.idmodel)
  this.getModel();

}

}