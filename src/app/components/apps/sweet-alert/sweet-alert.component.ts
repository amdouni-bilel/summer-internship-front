import { Component, OnInit } from '@angular/core';
declare var require
const Swal = require('sweetalert2');

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  Success() {
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'Your message has been succesfully sent',
      showConfirmButton: true,
      confirmButtonColor: '#705ec8',
    });
  }

  Warning() {
    Swal.fire({
      icon: 'warning',
      title: 'Some Risk File Is Founded!',
      text: 'Some Virus file is detected your system going to be in Risk',
      confirmButtonColor: '#705ec8',
      cancelButtonColor: '#705ec8',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }

  Danger() {
    Swal.fire({
      icon: 'error',
      title: 'Something Went Wrong',
      text: 'Please fix the issue the issue file not loaded & items not found',
      confirmButtonColor: '#705ec8',
      cancelButtonColor: '#705ec8',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }

  Info() {
    Swal.fire({
      icon: 'info',
      title: 'Notification Alert',
      text: 'Your getting some notification from mail please check it',
      confirmButtonColor: '#705ec8',
      cancelButtonColor: '#705ec8',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }


  //custom Alerts
  public SimpleMessage = 'New Notification From admitro';
  public SimpleTitle = 'Notifications Styles';
  simpleAlert() {
    Swal.fire({
      text: this.SimpleMessage,
      showConfirmButton: true,
      confirmButtonColor: '#705ec8',
    });
  }

  titleAlert() {
    Swal.fire({
      title: this.SimpleTitle,
      showConfirmButton: true,
      confirmButtonColor: '#705ec8',
    });
  }

  imageAlert() {
    Swal.fire({
      title: this.SimpleTitle,
      text: this.SimpleMessage,
      imageUrl: '../../assets/images/brand/favicon.png',
      imageAlt: 'Custom image',
      confirmButtonColor: '#705ec8',
    })
  }

  timerAlert() {
    Swal.fire({
      title: this.SimpleTitle,
      html: 'New Notification From admitro (Close after 2 Seconds)',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    })

  }
  promptAlert() {
    Swal.fire({
      title: 'Notification Alert',
      text: 'Your getting some notification from mail please check it',
      showCancelButton: true,
      cancelButtonColor: '#705ec8',
      confirmButtonColor: '#705ec8',
    })
  }
  confirmAlert() {
    Swal.fire({
      icon: 'warning',
      title: this.SimpleTitle,
      text: this.SimpleMessage,
      confirmButtonColor: '#705ec8',
      cancelButtonColor: '#705ec8',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }

}
