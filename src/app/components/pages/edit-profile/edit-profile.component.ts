import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public countryData = [
    { name: 'India'},
    { name: 'Germany'},
    { name: 'Canada'},
    { name: 'Usa'},
    { name: 'Afghanistan'},
    { name: 'Albania'},
    { name: 'China'},
    { name: 'Denmark'},
    { name: 'Finland'},
    { name: 'Kiribati'},
    { name: 'Kuwait'},
    { name: 'Mexico'},
  ]

}
