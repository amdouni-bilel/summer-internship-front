import { Component, OnInit } from '@angular/core';

import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { TreeviewService } from 'src/app/shared/services/treeview.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailmanagerService } from './mailmanager.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({ 
  selector: 'app-mailmanager', 
  templateUrl: './mailmanager.component.html',
  styleUrls: ['./mailmanager.component.scss'],
})
export class MailmanagerComponent implements OnInit {
  coordonneeGroup: FormGroup;
  coordonneeUser: FormGroup;
  updatingGroup: FormGroup;


  emailDropDown=[]; //email dropdown list
  emailSearchSettings={}; //email search settings
  searchEmails=[]; //email search items

  dropdownList = []; //group dropdown list
  searchItems = []; //group search items
  searchSettings = {}; //group search settings

  

  tab: any;
  emails=[];

  modalOptions: NgbModalOptions;

  public myGroupItems: TreeviewItem[];
  public expandConfig = TreeviewConfig.create(
    {
      hasAllCheckBox: false,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
    }
  )

  constructor(
    private toaster: ToastrService,
    private treeviewService: TreeviewService,
    private _formBuilder: FormBuilder,
    private mailService: MailmanagerService,

    private modalService: NgbModal
  ) {}

  openModal(group: any, content: any) {
    this.updatingGroup.patchValue({
      nom: group.nom,
      description: group.description,
    });
    this.modalService.open(content, { size: 'lg' });
  }

  updateAndClose(group: any) {
    const updatedGroup = {
      ...group,
      nom: this.updatingGroup.value.nom,
      description: this.updatingGroup.value.description
    };
  
    this.mailService.updateGroup(updatedGroup).subscribe(
      () => {
        console.log('Group updated successfully');
        this.modalService.dismissAll(); // Close the modal
        this.toaster.success("Groupe modifié!", "Success")
      },
      (error) => {
        console.error('Failed to update group', error);
      }
    );
  
    this.mailService.getallgroups().subscribe((res) => {
      this.dropdownList = res.map((item) => ({ id: item.id, itemName: item.nom })); // Update the dropdown checklist dynamically
      this.tab = res; // Update the table of groups dynamically
    });
    //updating the treeview
    this.treeviewService.getGroupsAsTreeviewItems().subscribe(
      (items: TreeviewItem[]) => {
        this.myGroupItems = items;
      },
      (error: any) => {
        console.error('Failed to fetch treeview items', error);
      }
    ); 
  }
  

  savegroupe() {
    this.mailService
      .saveGroupe(this.coordonneeGroup.value)
      .subscribe((data) => {
        this.toaster.success('Groupe Ajouté', 'Success');
        // Fetch the updated list of groups
        this.mailService.getallgroups().subscribe((res) => {
          //updating the dropdown checklist dynamically
          this.dropdownList = res.map((item) => ({
            id: item.id,
            itemName: item.nom,
          })); 
          //updating the table of groups dynamically
          this.tab = res; 
        });
        //updating the treeview
        this.treeviewService.getGroupsAsTreeviewItems().subscribe(
          (items: TreeviewItem[]) => {
            this.myGroupItems = items;
          },
          (error: any) => {
            console.error('Failed to fetch treeview items', error);
          }
        ); 
        //resetting the fields
        this.coordonneeGroup.reset();
      });
  }

  onEmailSelect(item:any){
    this.searchEmails.push(item.itemName);
  }

  onEmailDeselect(item:any){
    const index = this.searchEmails.findIndex(
      (selectedItem) => selectedItem === item.id
    );
    if (index !== -1) {
      this.searchEmails.splice(index, 1);
    }
  
  }

  onItemSelect(item: any) {
    this.searchItems.push(item.id);
  }

  onItemDeselect(item: any) {
    const index = this.searchItems.findIndex(
      (selectedItem) => selectedItem === item.id
    );
    if (index !== -1) {
      this.searchItems.splice(index, 1);
    }
  }

  saveByEmail() {
    const emails = this.searchEmails;
    const groupes = this.searchItems; // searchItems contient les group IDs
    console.log(groupes);

    const reqBody = {
      emails: emails,
      groupes: groupes,
    }
    if ((groupes.length == 0) || (emails.length==0)){
      this.toaster.error('Veuillez remplir les deux champs !', 'Error');
    } else {
      this.mailService.saveByEmail(reqBody).subscribe(
        (data) => {
          console.log(data); // Log the response data
        },
        (error) => {
          if (error.status === 200) {
            this.toaster.success('Utilisateur affecté!', 'Success');
            //updating the treeview
            this.treeviewService.getGroupsAsTreeviewItems().subscribe(
              (items: TreeviewItem[]) => {
                this.myGroupItems = items;
              }
            ); 
          } else {
            this.toaster.error(error.error, 'Error');
            console.log(error.error);
          }
        }
      );
    }
  }

  deleteGroup(group: any) {
    this.mailService.deleteGroup(group.id).subscribe(
      () => {
        console.log('no other solution yet');
      },
      (error) => {
        if (error.status === 200) {
          // Remove the deleted group from the tab array
          const index = this.tab.findIndex((item) => item.id === group.id);
          if (index !== -1) {
            this.tab.splice(index, 1);
          }
          // Show success message or perform any other action
          this.toaster.success('Group deleted successfully', 'Success');

          // Update the dropdown list by re-fetching the data
          this.mailService.getallgroups().subscribe((res) => {
            this.dropdownList = res.map((item) => ({
              id: item.id,
              itemName: item.nom,
            }));
          });
          //update the treeview
          this.treeviewService.getGroupsAsTreeviewItems().subscribe(
            (items: TreeviewItem[]) => {
              this.myGroupItems = items;
            },
            (error: any) => {
              console.error('Failed to fetch treeview items', error);
            }
          ); 
        } else {
          // Handle the error if deletion fails
          this.toaster.error('Failed to delete group', 'Error');
          console.log(error);
        }
      }
    );
  }
  removeUserFromGroup(email:string, groupId: string) {
    this.mailService.removeUserFromGroup(email, groupId).subscribe(
      () => {
        this.toaster.success("User removed from group successfully", "Success");
        console.log(`Email "${email}" removed from group "${groupId}" successfully`);
      },
      (error) => {
        this.toaster.error("Failed to remove user from group", "Error");
        console.error(`Failed to remove email "${email}" from group "${groupId}"`, error);
      }
    );
  }

  ngOnInit(): void {

    // this.mailService.getAllGroups().subscribe((res) => {
    //   this.tab = res;
    //   for (var i = 0; i <= this.tab.length; i++) {
    //     this.dropdownList.push({ id: i + 1, itemName: this.tab[i].nom });
    //   }
    // });
    this.mailService.getallgroups().subscribe((res) => {
      this.tab = res;
      console.log(this.tab);
      this.dropdownList = res.map((item) => ({
        id: item.id,
        itemName: item.nom,
      }));
    });
    this.mailService.getAllEmails().subscribe((res) => {
      console.log(res);
      this.emails = res;
      for (var i = 0; i<this.emails.length; i++) {
        this.emailDropDown.push({
          id: i, 
          itemName: this.emails[i]
        })
      }
      console.log(this.emailDropDown)
    })
    

    this.coordonneeGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      description: ['', ''],
    });

    this.coordonneeUser = this._formBuilder.group({
      emails: [[], [Validators.email, Validators.required]],
      groupes: [[], Validators.required],
    });

    this.updatingGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      description: ['', ''],
    });

    this.searchSettings = {
      singleSelection: false,
      text: 'Liste des groupes',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
    };

    this.emailSearchSettings = {
      singleSelection: false,
      text: 'Liste des emails',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
    };

    //treeview
    this.treeviewService.getGroupsAsTreeviewItems().subscribe(
      (items: TreeviewItem[]) => {
        this.myGroupItems = items;
        console.log(this.myGroupItems);
      },
      (error: any) => {
        console.error('Failed to fetch treeview items', error);
      }
    ); 
  }
}