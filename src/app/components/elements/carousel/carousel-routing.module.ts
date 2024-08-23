import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { Carousel3Component } from './carousel3/carousel3.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'carousel1',
                component: Carousel1Component
            },
            {
                path: 'carousel2',
                component: Carousel2Component
            },
            {
                path: 'carousel3',
                component: Carousel3Component
            },
        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarouselRoutingModule { }