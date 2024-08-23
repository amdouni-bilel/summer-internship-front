export let tabsHTML1 = 
`<div class="panel panel-primary">
    <div class="tab-menu-heading">
        <div class="tabs-menu">
            <!-- Tabs -->
            <ul ngbNav #nav1="ngbNav" [(activeId)]="TabStyle1" class="nav nav-pills">
                <li [ngbNavItem]="1"><a ngbNavLink>Tab 1</a>
                    <ng-template ngbNavContent>
                        <p>page editors now use Lorem Ipsum as their default model text, and a search
                            for 'lorem
                            ipsum' will uncover many web sites still in their infancy. Various versions
                            have
                            evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour
                            and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="2"><a ngbNavLink>Tab 2</a>
                    <ng-template ngbNavContent>
                        <p> default model text, and a search for 'lorem ipsum' will uncover many web
                            sites still
                            in their infancy. Various versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="3"><a ngbNavLink>Tab 3</a>
                    <ng-template ngbNavContent>
                        <p>over the years, sometimes by accident, sometimes on purpose (injected humour
                            and the
                            like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="4"><a ngbNavLink>Tab 4</a>
                    <ng-template ngbNavContent>
                        <p>page editors now use Lorem Ipsum as their default model text, and a search
                            for 'lorem
                            ipsum' will uncover many web sites still in their infancy. Various versions
                            have
                            evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour
                            and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
            </ul>
        </div>
    </div>
<div [ngbNavOutlet]="nav1" class="tabs-menu-body"></div>
</div>`
export let tabsTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  TabStyle1;
  
  constructor() { }

  ngOnInit(): void {
  }
 
}`
export let tabsHTML2 = 
`<div class="panel panel-primary">
    <div class="tab-menu-heading p-0 bg-light">
        <div class="tabs-menu1 ">
            <!-- Tabs -->
            <ul ngbNav #nav2="ngbNav" [(activeId)]="TabStyle2" class="nav">
                <li [ngbNavItem]="1" class=""><a ngbNavLink>Tab 1</a>
                    <ng-template ngbNavContent>
                        <p>page editors now use Lorem Ipsum as their default model text, and a search
                            for 'lorem
                            ipsum' will uncover many web sites still in their infancy. Various versions
                            have
                            evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour
                            and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="2"><a ngbNavLink>Tab 2</a>
                    <ng-template ngbNavContent>
                        <p> default model text, and a search for 'lorem ipsum' will uncover many web
                            sites still
                            in their infancy. Various versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="3"><a ngbNavLink>Tab 3</a>
                    <ng-template ngbNavContent>
                        <p>over the years, sometimes by accident, sometimes on purpose (injected humour
                            and the
                            like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="4"><a ngbNavLink>Tab 4</a>
                    <ng-template ngbNavContent>
                        <p>page editors now use Lorem Ipsum as their default model text, and a search
                            for 'lorem
                            ipsum' will uncover many web sites still in their infancy. Various versions
                            have
                            evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour
                            and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero
                            eos et</p>
                    </ng-template>
                </li>
            </ul>
        </div>
    </div>
    <div [ngbNavOutlet]="nav2" class="tabs-menu-body"></div>
</div>`
export let tabsTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  TabStyle2;
  
  constructor() { }

  ngOnInit(): void {
  }
 
}`
export let tabsHTML3 = 
`<div class="panel panel-primary tabs-style-3">
    <div class="tab-menu-heading">
        <div class="tabs-menu ">
            <!-- Tabs -->
            <ul ngbNav #nav3="ngbNav" [(activeId)]="TabStyle3" class="nav">
                <li [ngbNavItem]="1"><a ngbNavLink><i class="fe fe-airplay mr-1"></i> Tab Style 01</a>
                    <ng-template ngbNavContent>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga.</p>
                        <p class="mb-0">Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                            tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                            repellendus. </p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="2"><a ngbNavLink><i class="fe fe-package mr-1"></i> Tab Style 02</a>
                    <ng-template ngbNavContent>
                        <p> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>
                        <p class="mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                            qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="3"><a ngbNavLink><i class="fe fe-settings mr-1"></i> Tab Style 03</a>
                    <ng-template ngbNavContent>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                            eveniet ut et voluptates repudiandae sint et molestiae non recusandae</p>
                        <p class="mb-0">Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                            tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                            repellendus. </p>
                    </ng-template>
                </li>
                <li [ngbNavItem]="4"><a ngbNavLink><i class="fe fe-database mr-1"></i> Tab Style 04</a>
                    <ng-template ngbNavContent>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                            beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                            desire</p>
                        <p class="mb-0">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
                            est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
                            rerum necessitatibus </p>
                    </ng-template>
                </li>
            </ul>
        </div>
    </div>
    <div [ngbNavOutlet]="nav3" class="tabs-menu-body"></div>
</div>`
export let tabsTS3 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  
  TabStyle3;
  
  constructor() { }

  ngOnInit(): void {
  }
 
}`
export let tabsHTML4 = 
`<div class="d-md-flex">
    <div class="border border-right-0 br-tl-7 br-bl-7">
        <div class="panel panel-primary tabs-style-4">
            <div class="tab-menu-heading border-top-0 border-bottom-0 border-left-0 br-tr-0">
                <div class="tabs-menu ">
                    <!-- Tabs -->
                    <ul ngbNav #nav4="ngbNav" [(activeId)]="TabStyle4" class="nav">
                        <li [ngbNavItem]="1"><a ngbNavLink ><i class="fe fe-airplay mr-1"></i> Tab Style 01</a>
                        <ng-template ngbNavContent>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            <p class="mb-0">Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                                tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                                quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                repellendus. </p>
                        </ng-template>
                        </li>
                        <li [ngbNavItem]="2"><a ngbNavLink ><i class="fe fe-package mr-1"></i> Tab Style 02</a>
                        <ng-template ngbNavContent>
                            <p> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                repellendus. </p>
                            <p> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                repellendus. </p>
                            <p class="mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        </ng-template>
                        </li>
                        <li [ngbNavItem]="3"><a ngbNavLink ><i class="fe fe-settings mr-1"></i> Tab Style 03</a>
                        <ng-template ngbNavContent>
                            <p> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                repellendus. </p>
                            <p> But I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born and I will give you a complete account of the system, and
                                expound the actual teachings of the great explorer of the truth, the
                                master-builder of human happiness. </p>
                            <p class="mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        </ng-template>
                        </li>
                        <li [ngbNavItem]="4"><a ngbNavLink ><i class="fe fe-database mr-1"></i> Tab Style 04</a>
                        <ng-template ngbNavContent>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are
                                so beguiled and demoralized by the charms of pleasure of the moment, so blinded
                                by desire quod maxime placeat facere possimus, omnis voluptas assumenda est,
                                omnis dolor repellendus.</p>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are
                                so beguiled and demoralized by the charms of pleasure of the moment, so blinded
                                by desire quod maxime placeat facere possimus, omnis voluptas assumenda est,
                                omnis dolor repellendus.</p>
                            <p class="mb-0">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
                                officiis debitis aut rerum necessitatibus </p>
                        </ng-template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div [ngbNavOutlet]="nav4" class="tabs-menu-body"></div>
</div>`
export let tabsTS4 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  
  TabStyle4;
  constructor() { }

  ngOnInit(): void {
  }
 
}`
