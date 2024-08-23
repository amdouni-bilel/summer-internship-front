export let alertHTML1 = 
`<ngb-alert type="success" *ngIf="alertSuccess" (close)="alertSuccess = false">
<strong>Success!</strong> alert—At vero eos et accusamus praesentium!
</ngb-alert>
<ngb-alert type="info" *ngIf="alertInfo" (close)="alertInfo = false">
<strong>Info!</strong> alert—At vero eos et accusamus praesentium!</ngb-alert>
<ngb-alert type="warning" *ngIf="alertWarning" (close)="alertWarning = false">
<strong>Warning!</strong> alert—At vero eos et accusamus praesentium!
</ngb-alert>
<ngb-alert type="danger" *ngIf="alertDanger" (close)="alertDanger = false">
<strong>Danger!</strong> alert—At vero eos et accusamus praesentium!
</ngb-alert>`
export let alertTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alertSuccess = true;
  alertInfo = true;
  alertWarning = true;
  alertDanger = true;
}
`

export let alertHTML2 = 
`<ngb-alert type="success" *ngIf="alertLinkSuccess" (close)="alertLinkSuccess = false">
    <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message.</a>
</ngb-alert>
<ngb-alert type="info" *ngIf="alertLinkInfo" (close)="alertLinkInfo = false">
    <strong>Heads up!</strong> This<a href="#" class="alert-link"> alert needs your attention,</a> but it's not super important.
</ngb-alert>
<ngb-alert type="warning" *ngIf="alertLinkWarning" (close)="alertLinkWarning = false">
    <strong>Warning! </strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good.</a>
</ngb-alert>
<ngb-alert type="danger" *ngIf="alertLinkDanger" (close)="alertLinkDanger = false">
    <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up </a>and try submitting again.
</ngb-alert>`
export let alertTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    alertLinkSuccess = true;
    alertLinkInfo = true;
    alertLinkWarning = true;
    alertLinkDanger = true;
}
`

export let alertHTML3 = 
`<ul class="nav nav-pills nav-with-alerts">
<li class="col-lg-3">
    <a href="javascript:void(0)" (click)="info()" id="info">
        <div class="alert alert-info">
            Informations
        </div>
    </a>
</li>
<li class="col-lg-3">
    <a href="javascript:void(0)" (click)="success()" id="success">
        <div class="alert alert-success">
            Successes
        </div>
    </a>
</li>
<li class="col-lg-3">
    <a href="javascript:void(0)" (click)="warning()" id="warning">
        <div class="alert alert-warning">
            Warnings
        </div>
    </a>
</li>
<li class="col-lg-3">
    <a href="javascript:void(0)" (click)="error()" id="error">
        <div class="alert alert-danger">
            Errors
        </div>
    </a>
</li>
</ul>
<div class="tab-content">
<div *ngIf="isInfo">
    <div class="tab-pane" id="info">
        <div class="alert alert-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula nec arcu at faucibus. Duis justo urna, adipiscing quis turpis non, dictum hendrerit ipsum. Fusce
                non viverra erat. Curabitur sit amet ante dui. Donec congue molestie mi a varius. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aliquam ornare quam eu ultricies bibendum. Cras ante augue, pharetra eget ultricies eu, aliquam eu velit. Phasellus mattis vitae justo pretium
                tempus. Duis vitae felis et sem tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
</div>
<div *ngIf="isSuccess">
    <div class="tab-pane" id="success">
        <div class="alert alert-success">
            <p>Nulla magna sapien, ullamcorper nec dolor id, gravida venenatis velit. Aliquam et malesuada metus. Sed vitae turpis pharetra nunc dignissim ultricies et sit amet
                lacus. Cras gravida felis mauris, a pellentesque augue interdum ac. In varius facilisis ante, nec viverra libero commodo ac. Maecenas tempus, elit nec aliquet fermentum, tellus
                odio auctor sapien, eu scelerisque purus turpis quis eros. Morbi id ante diam. Phasellus aliquet purus id odio mollis dignissim. Proin sagittis, risus a ullamcorper dapibus,
                velit enim adipiscing nulla, vel facilisis ipsum dui quis diam. Aliquam ullamcorper accumsan felis id consequat. Nullam vehicula ut mi eget porta.</p>
        </div>
    </div>
</div>
<div *ngIf="isWarning">
    <div class="tab-pane" id="warning">
        <div class="alert alert-warning">
            <p>Curabitur varius euismod nisi ac lacinia. Curabitur nec urna adipiscing, fermentum augue id, commodo nisl. Quisque ut convallis est. Suspendisse tellus nisi, tempus eu nulla
                quis, laoreet imperdiet ante. Vivamus in lorem purus. Integer luctus elit et metus condimentum porta. Suspendisse viverra sit amet mauris vel elementum. Fusce lorem
                arcu, accumsan non odio vel, vestibulum pharetra odio. Sed non mollis mi, ac lacinia nunc. Cras eleifend massa velit, tincidunt tempor arcu sodales at. Nam sit amet erat enim.
                Mauris placerat suscipit odio, vitae gravida purus bibendum sed. Suspendisse a nunc quis libero rutrum mattis at ac metus. In ac risus eleifend, vestibulum mi eget, dapibus
                nulla. Nunc diam eros, convallis a sagittis non, rhoncus non nunc. Maecenas ineleifend quam.</p>
        </div>
    </div>
</div>
<div *ngIf="isError">
    <div class="tab-pane" id="error">
        <div class="alert alert-danger">
            <p>Sed quis dapibus nunc. Proin vestibulum libero elit, gravida tincidunt mauris tincidunt blandit. Donec non ultrices neque, nec sollicitudin elit. Curabitur volutpat nulla
                vel mauris vestibulum, tempor ultrices quam ullamcorper. Fusce ultricies elementum pretium. In vel consectetur leo, nec rutrum velit. Fusce fermentum pulvinar nibh. Ut posuere
                ante sed luctus egestas. Aenean ut suscipit tortor.
            </p>
        </div>
    </div>
</div>
</div>`
export let alertTS3 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    public isInfo = false;
    public isSuccess = false;
    public isWarning = false;
    public isError = false;
    
    info() {
      this.isInfo = !this.isInfo;
      this.isSuccess = false;
      this.isWarning = false;
      this.isError = false;
      if (this.isInfo == true) {
        document.querySelector('.tab-pane').classList.add('active');
      }
      else {
        document.querySelector('.tab-pane').classList.remove('active');
      }
    
    }
    success() {
      this.isSuccess = !this.isSuccess;
      this.isInfo = false;
      this.isWarning = false;
      this.isError = false;
      if (this.isSuccess == true)
        document.querySelector('.tab-pane').classList.add('active');
      else
        document.querySelector('.tab-pane').classList.remove('active');
    }
    warning() {
      this.isWarning = !this.isWarning;
      this.isInfo = false;
      this.isSuccess = false;
      this.isError = false;
      if (this.isWarning == true)
        document.querySelector('.tab-pane').classList.add('active');
      else
        document.querySelector('.tab-pane').classList.remove('active');
    }
    error() {
      this.isError = !this.isError;
      this.isInfo = false;
      this.isSuccess = false;
      this.isWarning = false;
      if (this.isError == true)
        document.querySelector('.tab-pane').classList.add('active');
      else
        document.querySelector('.tab-pane').classList.remove('active');
    }
}`

export let alertHTML4 = 
`<button type="button" class="btn btn-success mt-1 mb-1" container="body" placement="bottom" popoverTitle="alert sucess" ngbPopover="Well done! You successfully read this important alert message.."> 
    Show success
</button>
<button type="button" class="btn btn-info mt-1 mb-1" container="body" placement="top" popoverTitle="alert info" ngbPopover="Heads up! This alert needs your attention, but it's not super important...">
    Show info
</button>
<button type="button" class="btn btn-warning mt-1 mb-1" container="body" placement="bottom" popoverTitle="alert warning" ngbPopover="Warning! Best check yourself, you're not looking too good..">
    Show warning
</button>
<button type="button" class="btn btn-secondary mt-1 mb-1" container="body" placement="top" popoverTitle="alert secondary" ngbPopover="Error! Please Check your email id..">
    Show secondary
</button>
<button type="button" class="btn btn-danger mt-1 mb-1" container="body" placement="bottom" popoverTitle="alert danger" ngbPopover="Oh snap! Change a few things up and try submitting again.">
    Show danger
</button>
<button type="button" class="btn btn-primary mt-1 mb-1" data-container="body" placement="top" popoverTitle="alert primary" ngbPopover="Cool! This alert will close in 3 seconds. The data-delay attribute is in milliseconds.">
    Show primary
</button>`
export let alertTS4 = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    
}`

export let alertHTML5 = 
`<div class="row">
<div class="col-sm-6 col-md-6">
    <ngb-alert type="success" *ngIf="alertStyleSuccess" (close)="alertStyleSuccess = false">
        <strong>Success Message</strong>
        <hr class="message-inner-separator">
        <p>You successfully read this important alert message.</p>
    </ngb-alert>
</div>
<div class="col-sm-6 col-md-6">
    <ngb-alert type="info" *ngIf="alertStyleInfo" (close)="alertStyleInfo = false">
        <strong>Info Message</strong>
        <hr class="message-inner-separator">
        <p>This alert needs your attention, but it's not super important.</p>
    </ngb-alert>
</div>
<div class="col-sm-6 col-md-6">
    <ngb-alert type="warning" *ngIf="alertStyleWarning" (close)="alertStyleWarning = false">
        <strong>Warning Message</strong>
        <hr class="message-inner-separator">
        <p>Best check yo self, you're not looking too good.</p>
    </ngb-alert>
</div>
<div class="col-sm-6 col-md-6">
    <ngb-alert type="danger" *ngIf="alertStyleDanger" (close)="alertStyleDanger = false">
        <strong>Danger Message</strong>
        <hr class="message-inner-separator">
        <p>Change a few things up and try submitting again.</p>
    </ngb-alert>
</div>
</div>`
export let alertTS5 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    alertStyleSuccess = true;
    alertStyleInfo = true;
    alertStyleWarning = true;
    alertStyleDanger = true;
}`

export let alertHTML6 = 
`<ngb-alert type="success" *ngIf="alertIconSuccess" (close)="alertIconSuccess = false">
    <i class="fa fa-check-circle-o mr-2" aria-hidden="true"></i> Well done! You successfully read this important alert message.
</ngb-alert>
<ngb-alert type="info" *ngIf="alertIconInfo" (close)="alertIconInfo = false">
    <i class="fa fa-bell-o mr-2" aria-hidden="true"></i>Heads up! This alert needs your attention, but it's not super important.
</ngb-alert>
<ngb-alert type="warning" *ngIf="alertIconWarning" (close)="alertIconWarning = false">
    <i class="fa fa-exclamation mr-2" aria-hidden="true"></i> Warning! Better check yourself, you're not looking too good.
</ngb-alert>
<ngb-alert type="danger" *ngIf="alertIconDanger" (close)="alertIconDanger = false">
    <i class="fa fa-frown-o mr-2" aria-hidden="true"></i>Oh snap!Change a few things up and try submitting again.
</ngb-alert>`
export let alertTS6 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    alertIconSuccess = true;
    alertIconInfo = true;
    alertIconWarning = true;
    alertIconDanger = true;
}`

export let alertHTML7 = 
`<ngb-alert type="light-primary">This is a primary alert—check it out!</ngb-alert>
<ngb-alert type="light-secondary">This is a secondary alert—check it out!</ngb-alert>
<ngb-alert type="light-success">This is a success alert—check it out!</ngb-alert>
<ngb-alert type="light-danger">This is a danger alert—check it out!</ngb-alert>
<ngb-alert type="light-warning">This is a warning alert—check it out!</ngb-alert>
<ngb-alert type="light-info"> This is a info alert—check it out!</ngb-alert>
<ngb-alert type="light">This is a light alert—check it out!</ngb-alert>
<ngb-alert type="dark">This is a dark alert—check it out!</ngb-alert>`
export let alertTS7 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    
}`

export let alertHTML8 = 
`<ngb-alert [dismissible]="false" type="primary">
    This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert [dismissible]="false" type="secondary">
    This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert [dismissible]="false" type="success">
    This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert [dismissible]="false" type="danger">
    This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert [dismissible]="false" type="warning">
    This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert [dismissible]="false" type="info">
    This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert [dismissible]="false" type="light">
    This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>
<ngb-alert [dismissible]="false" type="dark">
    This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</ngb-alert>`
export let alertTS8 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    
}`