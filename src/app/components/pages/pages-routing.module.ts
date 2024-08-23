import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './search/search.component';
import { TermsComponent } from './terms/terms.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'editprofile', component: EditProfileComponent},
            { path: 'gallery', component: GalleryComponent},
            { path: 'faqs', component: FaqsComponent},
            { path: 'terms', component: TermsComponent},
            { path: 'search', component: SearchComponent},
            { path: 'empty-page', component: EmptyPageComponent},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule { }