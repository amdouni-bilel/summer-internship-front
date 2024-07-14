import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { PhoneNumberFormat } from 'src/app/shared/phone-number-format';
@Component({
  selector: 'app-form-advanced',
  templateUrl: './form-advanced.component.html',
  styleUrls: ['./form-advanced.component.scss'],
})
export class FormAdvancedComponent implements OnInit {


  constructor() { }

  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    addRemoveLinks: true,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config2: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config3: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    acceptedFiles: '.png',
  };

  selectedCountries = [];
  select2Countries = [
    {
      id: 'group1',
      title: 'Mountain Time Zone',
      countryNames: [
        { id: "1", title: 'Arizona' },
        { id: "2", title: 'Colorado' },
        { id: "3", title: 'Idaho' },
        { id: "4", title: 'Montana' },
        { id: "5", title: 'Nebraska' },
        { id: "6", title: 'New Mexico' },
        { id: "7", title: 'North Dakota' },
        { id: "8", title: 'Utah' },
        { id: "9", title: 'Wyoming' },
      ]
    },
    {
      id: "group2",
      title: 'Central Time Zone',
      countryNames: [
        { id: "1", title: 'Alabama' },
        { id: "2", title: 'Arkansas' },
        { id: "3", title: 'Illinois' },
        { id: "4", title: 'Iowa' },
        { id: "5", title: 'Kansas' },
        { id: "6", title: 'Kentucky' },
        { id: "7", title: 'Louisiana' },
        { id: "8", title: 'Minnesota' },
        { id: "9", title: 'Mississippi' },
        { id: "10", title: 'Missouri' },
        { id: "11", title: 'Oklahoma' },
        { id: "12", title: 'South Dakota' },
        { id: "13", title: 'Texas' },
        { id: "14", title: 'Tennessee' },
        { id: "15", title: 'Wisconsin' },
      ]
    }
  ]

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }

  dropdownList = [];
  dropdownList2 = [];

  SingleItems = [];
  SingleSettings = {};

  multipleItems = [];
  multipleSettings = {};

  selectedItems = [];
  selectedSettings = {};

  disableItems = [];
  disableSettings = {};

  searchItems = [];
  searchSettings = {};

  addItems = [];
  addSettings = {};
  count = 10;

  itemList = [];
  itemSelect = [];
  itemSettings = {};
  ngOnInit(): void {
    this.dropdownList = [
      { "id": 1, "itemName": "January" },
      { "id": 2, "itemName": "February" },
      { "id": 3, "itemName": "March" },
      { "id": 4, "itemName": "April" },
      { "id": 5, "itemName": "May" },
      { "id": 6, "itemName": "June" },
      { "id": 7, "itemName": "July" },
      { "id": 8, "itemName": "August" },
      { "id": 9, "itemName": "September" },
      { "id": 10, "itemName": "October" },
      { "id": 11, "itemName": "November" },
      { "id": 12, "itemName": "December" },
    ];

    this.dropdownList2 = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Germany" },
      { "id": 7, "itemName": "France" },
      { "id": 8, "itemName": "Russia" },
      { "id": 9, "itemName": "Italy" },
      { "id": 10, "itemName": "Sweden" }
    ];

    this.SingleSettings = {
      singleSelection: true,
      text: "Select Single Month",
      classes: "myclass custom-class"
    };

    this.multipleSettings = {
      singleSelection: false,
      text: "Select Multiple Months",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };

    this.selectedItems = [
      { "id": 1, "itemName": "January" },
      { "id": 3, "itemName": "March" },
    ];
    this.selectedSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };

    this.disableSettings = {
      text: "Disable",
      disabled: true,
    };

    this.searchSettings = {
      singleSelection: false,
      text: "Search Month",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true
    }

    this.addSettings = {
      singleSelection: false,
      text: "Search Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      addNewItemOnFilter: true
    }

    this.itemList = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" },
    ];
     this.itemSettings = {
       singleSelection: false,
       text: 'Select Group',
       selectAllText: 'Select All',
       unSelectAllText: 'UnSelect All',
       searchPlaceholderText: 'Search Group',
       enableSearchFilter: true,
       badgeShowLimit: 5,
       groupBy: 'category'
     }
  }

  onAddItem(data:string){
    this.count++;
    this.dropdownList2.push({ "id": this.count, "itemName": data });
    this.addItems.push({ "id": this.count, "itemName": data });
  }

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}


}

