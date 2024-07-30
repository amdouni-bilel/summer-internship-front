import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list2',
  templateUrl: './user-list2.component.html',
  styleUrls: ['./user-list2.component.scss']
})
export class UserList2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public UserlistData = [
    { img: '../../assets/images/users/7.jpg', name: 'Denis Rosenblum', designation: 'Project Manager' },
    { img: '../../assets/images/users/7.jpg', name: 'Harvey Mattos', designation: 'Develpoer' },
    { img: '../../assets/images/users/7.jpg', name: 'Catrice Doshier', designation: 'Assistant Manager' },
    { img: '../../assets/images/users/7.jpg', name: 'Catherina Bamber', designation: 'Company Manager' },
    { img: '../../assets/images/users/7.jpg', name: 'Margie Fitts', designation: 'IT Manager' },
    { img: '../../assets/images/users/7.jpg', name: 'Dana Lott', designation: 'HR Manager' },
    { img: '../../assets/images/users/7.jpg', name: 'Benedict Vallone', designation: 'HR Recriuter' },
    { img: '../../assets/images/users/7.jpg', name: 'Robbie Ruder', designation: 'CEO' },
    { img: '../../assets/images/users/7.jpg', name: 'Micaela Aultman', designation: 'PHP Developer' },
    { img: '../../assets/images/users/7.jpg', name: 'Jacquelynn Sapienza', designation: 'Web Developer' },
    { img: '../../assets/images/users/7.jpg', name: 'Elida Distefano', designation: 'HR Manager' },
    { img: '../../assets/images/users/7.jpg', name: 'Collin Bridgman', designation: 'Web Designer' },
  ]

}
