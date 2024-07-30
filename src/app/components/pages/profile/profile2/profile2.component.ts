import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.scss']
})
export class Profile2Component implements OnInit {

  public about: boolean = true;
  public friends: boolean = false;
  public timeline: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  About(){
    this.about = true;
    this.friends = false;
    this.timeline = false;
  }
  Friends(){
    this.about = false;
    this.friends = true;
    this.timeline = false;
  }
  Timeline(){
  this.about = false;    
  this.friends = false;
  this.timeline = true;
  }

  public FriendsListData = [
    { img: 'assets/images/users/1.jpg', name: 'Denis Rosenblum', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Harvey Mattos', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Catrice Doshier', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Catherina Bamber', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Margie Fitts', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Dana Lott', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Benedict Vallone', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Robbie Ruder', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Micaela Aultman', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Jacquelynn Sapienza', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Elida Distefano', designation: 'Project Manager' },
    { img: 'assets/images/users/1.jpg', name: 'Collin Bridgman', designation: 'Project Manager' },
  ]

}
