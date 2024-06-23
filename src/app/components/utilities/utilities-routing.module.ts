import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorderComponent } from './border/border.component';
import { ColorsComponent } from './colors/colors.component';
import { DisplayComponent } from './display/display.component';
import { FlexItemsComponent } from './flex-items/flex-items.component';
import { HeightComponent } from './height/height.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { TyphographyComponent } from './typhography/typhography.component';
import { WidthComponent } from './width/width.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'border', component: BorderComponent},
            { path: 'colors', component: ColorsComponent},
            { path: 'display', component: DisplayComponent},
            { path: 'flex-items', component: FlexItemsComponent},
            { path: 'height', component: HeightComponent},
            { path: 'margin', component: MarginComponent},
            { path: 'padding', component: PaddingComponent},
            { path: 'typhography', component: TyphographyComponent},
            { path: 'width', component: WidthComponent},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UtilitiesRoutingModule { }