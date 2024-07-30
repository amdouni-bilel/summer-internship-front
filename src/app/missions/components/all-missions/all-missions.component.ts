import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EntityModelMission } from '../../models/entity-model-mission';
import { MissionService } from '../../mission.services';

@Component({
  selector: 'app-all-missions',
  templateUrl: './all-missions.component.html',
  styleUrls: ['./all-missions.component.scss']
})
export class AllMissionsComponent implements OnInit {
  columns = [
    { prop: 'id', name: 'ID' },
    { prop: 'name', name: 'Name' },
    { prop: 'startDate', name: 'Start Date' },
    { prop: 'endDate', name: 'End Date' },
    { prop: 'freeDays', name: 'Free Days' },
    { prop: 'isForMe', name: 'Is For Me' },
    { prop: 'sellDays', name: 'Sell Days' },
    { prop: 'shareMission', name: 'Share Mission' },
    { prop: 'tjm', name: 'TJM' }
  ];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  missions: EntityModelMission[] = [];

  constructor(
    private toastr: ToastrService,
    private missionService: MissionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.missionService.getAllMissions().subscribe(missions => {
      this.missions = missions;
      this.loadingIndicator = false;
    });
  }

  deleteMission(missionId: number) {
    this.missionService.deleteMission(missionId).subscribe(() => {
      this.missions = this.missions.filter(mission => mission.id !== missionId); 
      this.toastr.success('Mission deleted successfully!');
    }, error => {
      this.toastr.error('Failed to delete mission');
      console.error('Error deleting mission:', error);
    });
  }

  navigateToAddMission() {
    this.router.navigate(['/missions/create']);
  }

  navigateToModifyMission(id: number) {
    this.router.navigate(['/missions/modify-mission', id]);
  }
}
