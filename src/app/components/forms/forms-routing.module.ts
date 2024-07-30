import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementsSizesComponent } from './form-elements-sizes/form-elements-sizes.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
const routes: Routes = [
    {
        path:'',
        children:[
            { path:'form-elements',component: FormElementsComponent },
            { path:'form-advanced',component: FormAdvancedComponent },
            { path:'form-wizard',component: FormWizardComponent },
            { path:'form-editor',component: FormEditorComponent },
            { path:'form-element-sizes',component: FormElementsSizesComponent },
            { path:'form-treeview',component: FormTreeviewComponent },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FormsRoutingModule {}