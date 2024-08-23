export let accordionhtml1 =
  `<ngb-accordion [closeOthers]="true">
  <ngb-panel id="static-1" title="Collapsible Group Item #1">
        <ng-template ngbPanelContent>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. 
          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable.
        </ng-template>
  </ngb-panel>
  <ngb-panel id="static-2" title="Collapsible Group Item #2">
        <ng-template ngbPanelContent>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
          Nihil anim keffiyeh helvetica, craft beer labore.
        </ng-template>
  </ngb-panel>
  <ngb-panel id="static-3" title="Collapsible Group Item #3">
        <ng-template ngbPanelContent>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et. 
          Nihil anim keffiyeh helvetica, craft beer labore.
        </ng-template>
  </ngb-panel>
</ngb-accordion>`

export let accordionts1 =
  `import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-accordion-basic',
  templateUrl: './accordion-basic.html'
})
export class NgbdAccordionBasic {
}`

export let accordionhtml2 =
  `<ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
<ngb-panel title="Collapsible Group Item #1">
    <ng-template ngbPanelContent>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
        lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
        probably haven't heard of them accusamus labore sustainable.
    </ng-template>
</ngb-panel>
<ngb-panel title="Collapsible Group Item #2">
    <ng-template ngbPanelContent>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
        lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
        probably haven't heard of them accusamus labore sustainable.
    </ng-template>
</ngb-panel>
<ngb-panel title="Collapsible Group Item #3">
    <ng-template ngbPanelContent>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
        lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
        probably haven't heard of them accusamus labore sustainable.
    </ng-template>
</ngb-panel>
</ngb-accordion>`

export let accordionts2 =
  `import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-accordion-static',
  templateUrl: './accordion-static.html'
})
export class NgbdAccordionStatic {
}`

export let accordionhtml3 =
  `<div class="mb-2">
    <a class="btn btn-primary" role="button" (click)="toggle()" [attr.aria-expanded]="!isCollapsed"
        aria-controls="collapseExample">
        Link with href
    </a>
    <button class="btn btn-secondary" type="button" (click)="toggle()"
        [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
        Button with data-target
    </button>
  </div>
  <div *ngIf="isCollapsed">
    <div class="border p-3">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </div>
</div>`
export let accordionts3 =
  `import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public isCollapsed = false;
   
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
`

export let accordionhtml4 =
  `<div class="mb-2">
  <a class="btn btn-info" role="button" (click)="first()" aria-controls="multiCollapseExample1">Toggle first element</a>
  <a class="btn btn-danger" role="button" (click)="second()" aria-controls="multiCollapseExample2">Toggle second element</a>
  <a class="btn btn-warning" role="button" (click)="both()" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</a>
</div>
<div class="row">
<div class="col">
    <div class="border p-3" *ngIf="isFirstCollapsed">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. But I must explain to you how all this you a explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
        pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
    </div>

</div>
<div class="col">
    <div class="border p-3" *ngIf="isSecondCollapsed">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio.
    </div>
</div>
</div>`
export let accordionts4 =
  `import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public isFirstCollapsed = false;
  public isSecondCollapsed = false;
   
  first() {
    this.isFirstCollapsed = !this.isFirstCollapsed;
  }
  second() {
    this.isSecondCollapsed = !this.isSecondCollapsed;
  }
  both() {
    this.isFirstCollapsed = !this.isFirstCollapsed;
    this.isSecondCollapsed = !this.isSecondCollapsed;
  }
}
`

export let accordionhtml5 =
`<div class="panel-group1" id="accordion1">
  <div class="panel panel-default mb-4 overflow-hidden">
      <div class="panel-heading1">
          <h4 class="panel-title1">
              <a class="accordion-toggle firstgradient bg-gradient-primary collapsed "
                  (click)="FirstGradient()">Section 1</a>
          </h4>
      </div>
      <div *ngIf="isFirstGradient">
          <div class="panel-collapse">
              <div class="panel-body">
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                      dictionary of over 200 Latin words </p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled.Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but
                      because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious
                      physical exercise</p>
              </div>
          </div>
      </div>
  </div>
  <div class="panel panel-default overflow-hidden">
    <div class="panel-heading1">
      <h4 class="panel-title1">
        <a class="accordion-toggle secondgradient bg-gradient-primary collapsed" (click)="SecondGradient()">Section 2</a>
        </h4>
    </div>
    <div class="panel-collapse" *ngIf="isSecondGradient">
      <div class="panel-body">
        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled.Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but
        because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious
        physical exercise</p>
      </div>
    </div>
  </div>
</div>
`
export let accordionts5 = 
`import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public isFirstGradient = false;
  public isSecondGradient = false;
   
  FirstGradient() {
    this.isFirstGradient = !this.isFirstGradient;
    if (this.isFirstGradient == true) {
      document.querySelector('.firstgradient').classList.remove('collapsed');
    } else {
      document.querySelector('.firstgradient').classList.add('collapsed');
    }
  }
  SecondGradient() {
    this.isSecondGradient = !this.isSecondGradient;
    if (this.isSecondGradient == true) {
      document.querySelector('.secondgradient').classList.remove('collapsed');
    } else {
      document.querySelector('.secondgradient').classList.add('collapsed');
    }
  }
}
`


