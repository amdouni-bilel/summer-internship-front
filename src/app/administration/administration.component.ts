import { Component, OnInit } from "@angular/core";
import * as codeData from '../shared/codeViewData/tabs'
import { TypeServiceService } from "./type-service.service";

@Component({
    selector: 'administration',
    templateUrl: './administration.template.html',
    styleUrls: ['./administration.scss']
  })
  export class AdministrationComponent implements OnInit {



    newItem
    TabStyle1;
    TabStyle2;
    TabStyle3;
    TabStyle4;

    itemList = []

    constructor(private service: TypeServiceService) { }

    ngOnInit(): void {
      this.getAllNotesFrais()
    }
    html5 = codeData.tabsHTML1;
    ts5 = codeData.tabsTS1;
    html6 = codeData.tabsHTML2;
    ts6 = codeData.tabsTS2;
    html7 = codeData.tabsHTML3;
    ts7 = codeData.tabsTS3;
    html8 = codeData.tabsHTML4;
    ts8 = codeData.tabsTS4;



    deleteItem(item: string): void {
      const index = this.itemList.indexOf(item);
      if (index !== -1) {
        this.itemList.splice(index, 1);
      }
    }

    deleteNotesFrais(id: string) {
      console.log(id)
      this.service.deleteNotesFrais(id).subscribe(
        response => {
          console.log('Response from server:', response);
          this.getAllNotesFrais()
        },
        error => {
          console.error('Error:', error);

        }

      );
    }

    getAllNotesFrais() {

   /*   this.service.getAllNotesFrais().subscribe(notesFraisList => {
        console.log(notesFraisList)
        this.itemList = notesFraisList
      });*/
    }


    addItem(value){
      const notesFraisString = JSON.stringify({ name: this.newItem });

      this.service.addNotesFrais(notesFraisString).subscribe(
        response => {
          this.getAllNotesFrais()
          this.newItem = ''
        },
        error => {
          console.error('Error:', error);

        }
      );
    }

  }
