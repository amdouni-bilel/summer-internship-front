import { Component, OnInit } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { TreeviewService } from 'src/app/shared/services/treeview.service';

@Component({
  selector: 'app-form-treeview',
  templateUrl: './form-treeview.component.html',
  styleUrls: ['./form-treeview.component.scss']
})
export class FormTreeviewComponent implements OnInit {

  public basicConfig = TreeviewConfig.create(
    {
      hasAllCheckBox: false,
      hasFilter: false,
      hasCollapseExpand: false,
      decoupleChildFromParent: false,
    }
  )

  public filterConfig = TreeviewConfig.create(
    {
      hasAllCheckBox: false,
      hasFilter: true,
      hasCollapseExpand: false,
      decoupleChildFromParent: false,
    }
  )
  public expandConfig = TreeviewConfig.create(
    {
      hasAllCheckBox: false,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
    }
  )

  public items1: TreeviewItem[];
  public items2: TreeviewItem[];
  public items3: TreeviewItem[];
  public items4: TreeviewItem[];

  constructor(private treeviewService: TreeviewService) { }

  ngOnInit(): void {
    this.items1 = this.treeviewService.getItems();
    this.items2 = this.treeviewService.getItems();
    this.items3 = this.treeviewService.getItems();
    this.items4 = this.treeviewService.getItems();
  }

}
