import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mov-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  collapseShow = 'hidden';

  constructor() { }

  ngOnInit() { }

  toggleCollapseShow(classes: string): void {
    this.collapseShow = classes;
  }

}
