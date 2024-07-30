import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatchedItem } from '../matched.model';
import { ResumeService } from '../resume.service';
import { ApiConfiguration } from 'src/app/api/api-configuration';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {
  resultList: MatchedItem[] = [];

  GESTION_CV = this.apiconf.gestioncv;
  MATCH = '/match';

  searchText: string;

  constructor(private http: HttpClient,private resumeService: ResumeService, private apiconf : ApiConfiguration) {}

  ngOnInit() {
    this.fetchSortedList();
  }


  fetchSortedList(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    const requestBody = this.searchText.trim();

    if (requestBody === '') {
      this.resultList = [];
      return;
    }

    this.http.post<MatchedItem[]>(this.GESTION_CV+`/match`, requestBody, { headers }).subscribe(
      (response) => {
        console.log(response);
        this.resultList = response;
        this.sortResultList();
      },
      (error) => {
        if (error.response && error.response.status === 404) {

          console.log("Error occurred while fetching sorted list:", error);

        } else if (error.response && error.response.status === 500) {

          console.log("Server error:", error);

        } else {

          console.log("Other error:", error);

        }

      }
    );
  }

  private sortResultList(): void {
    this.resultList.sort((a, b) => a.note - b.note);
  }


getStars(note: number): number[] {
    return Array(note).fill(0);
  }
  downloadCV(id: string) {

      this.resumeService.downloadResumeword(id).subscribe(
        (response) => {
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(response);
          link.download = 'resume.docx';
          link.click();
          window.URL.revokeObjectURL(link.href);
        },
        (error) => {
          if (error.response && error.response.status === 404) {

            console.log("Error downloading resume:", error);

          } else if (error.response && error.response.status === 500) {

            console.log("Server error:", error);

          } else {

            console.log("Other error:", error);

          }

        }
      );

  }
}
