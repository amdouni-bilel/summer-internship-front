import {Component, OnDestroy, OnInit} from '@angular/core';
import {MissionControllerService} from 'src/app/missions/config/services';
import {Subject} from "rxjs";
import {Page} from "../../../shared/interfaces/Page";
import {MissionResponse} from "../../models/mission-response";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-missions',
  templateUrl: './all-missions.component.html',
  styleUrls: ['./all-missions.component.scss']
})
export class AllMissionsComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();
  display = true;
  currentPage = 0;
  pageSize = 5;
  missions: Page<MissionResponse>;
  userId: any;

  constructor(
    private missionService: MissionControllerService,
    private toastr: ToastrService ,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadMissions();

    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      this.userId = parsedUser.id;
      console.log(this.userId, 'id user');
      console.log(user);
    } else {
      console.error('L\'utilisateur n\'est pas défini dans le local storage ou ne peut pas être analysé.');
    }
  }

  loadMissions(): void {
    this.missionService.getAllMissions(this.currentPage, this.pageSize)
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

  checkMissionsForCandidate(missionId: number): void {
    const candidateId = this.userId;
    this.missionService.checkMissionsForCandidate(candidateId, missionId).subscribe(
      (hasMissions: boolean) => {
        console.log('Le candidat a des missions associées :', hasMissions);
        if (hasMissions) {
          this.toastr.error('Vous avez déja postulé a cette missions ', 'Erreur');
        } else {
          this.router.navigate(['/missions/upload-cv/mission/', missionId]);
        }
      },
      (error) => {
        console.error('Erreur lors de la vérification des missions pour le candidat :', error);
      }
    );
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






