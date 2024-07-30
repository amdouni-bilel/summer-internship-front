import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MissionService } from '../../mission.services';
import { EntityModelMission } from '../../models/entity-model-mission';

@Component({
  selector: 'app-modify-mission',
  templateUrl: './modify-mission.component.html',
  styleUrls: ['./modify-mission.component.scss']
})
export class ModifyMissionComponent implements OnInit {
  missionForm: FormGroup;
  submitted = false;
  missionId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private missionService: MissionService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.missionForm = this.formBuilder.group({
      name: ['', Validators.required], 
      endDate: ['', Validators.required],
      freeDays: ['', Validators.required],
      isForMe: [false],
      sellDays: [false],
      shareMission: [false],
      startDate: ['', Validators.required],
      tjm: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.missionId = this.route.snapshot.params['id'];
    this.missionService.getMissionById(this.missionId).subscribe(mission => {
      this.missionForm.patchValue(mission);
    });
  }

  get formControls() { return this.missionForm.controls; }

  modifyMission() {
    this.submitted = true;

    if (this.missionForm.invalid) {
      return;
    }

    const modifiedMission: EntityModelMission = this.missionForm.value;
    modifiedMission.id = this.missionId;

    this.missionService.updateMission(this.missionId, modifiedMission).subscribe(() => {
      this.toastr.success('Mission modified successfully!');
      this.router.navigate(['/missions/all-missions']);
    }, error => {
      this.toastr.error('Failed to modify mission');
      console.error('Error modifying mission:', error);
    });
  }

  navigateToListMission() {
    this.router.navigate(['/missions/all-missions']);
  }
}
