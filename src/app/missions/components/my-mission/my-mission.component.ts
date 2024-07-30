import {Component, OnDestroy, OnInit} from '@angular/core';
import {MissionControllerService} from 'src/app/missions/config/services';
import {Subject} from "rxjs";
import {MissionResponse} from "../../models/mission-response";
import {Page} from "../../../shared/interfaces/Page";

@Component({
  selector: 'my-mission',
  templateUrl: './my-mission.component.html',
  styleUrls: ['./my-mission.component.scss']
})
export class MyMissionComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();
  display = true;
  currentPage = 0;
  pageSize = 5;
  missions: Page<MissionResponse>;

  constructor(
    private missionService: MissionControllerService
  ) {
  }

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.missionService.getMyMissions(this.currentPage, this.pageSize)
      .subscribe((data: Page<MissionResponse>) => {
          this.missions = data;
        }
      );
  }


  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadMissions();
  }

  show(): void {
    this.display = !this.display;
  }

  onPageSizeChange(): void {
    this.currentPage = 0;
    this.loadMissions();
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /*Method for deleting uppercase character */
  capitalizeTitle(title: string): string {
    const words = title.split(' ');
    const capitalizedWords = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    });
    return capitalizedWords.join(' ');
  }

}






