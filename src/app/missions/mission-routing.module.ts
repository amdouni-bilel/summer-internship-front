import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMissionComponent } from './components/create-mission/create-mission.component';
import { MyMissionComponent } from './components/my-mission/my-mission.component';
import {AllMissionsComponent} from "./components/all-missions/all-missions.component";
import {UploadCvComponent} from "./components/upload-cv/upload-cv.component";


const routes: Routes = [
    {
      path:'',  /*canActivate: [AuthGuard],*/
      children: [
        {
          path: 'create',
          component: CreateMissionComponent
        },
        {
          path: 'all-missions',
          component: AllMissionsComponent
        },
        { path: 'upload-cv/mission/:id', component: UploadCvComponent
        },
        {
          path: 'my-missions',
          component: MyMissionComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }
