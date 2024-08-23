import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { MailmanagerService } from '../../administration/mailmanager/mailmanager.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TreeviewService {
  constructor(
    private mailService: MailmanagerService
    ) {}
  getItems(): TreeviewItem[] {
    const user = new TreeviewItem({
      text: 'GroupA',
      value: 9,
      children: [
        { text: 'wissem@gmail.com', value: 9111 },
        { text: 'med@gmail.com', value: 9112 },
      ],
    });
    return [user];
  }
  
  getGroupsAsTreeviewItems(): Observable<TreeviewItem[]> {
    return this.mailService.getallgroups().pipe(
      map((groups: any[]) => {
        const items: TreeviewItem[] = [];
        groups.forEach((group: any) => {
          const children = group.emails.map((email: string) => ({
            text: email,
            value: email,
          }));

          const treeItem = new TreeviewItem({
            text: group.nom,
            value: group.id,
            children: children,
          });
          items.push(treeItem);
        });
        return items;
      })
    );
  }
}