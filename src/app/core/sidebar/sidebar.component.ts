import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mov-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public collapseShow = 'hidden';

  constructor(private router: Router) { }

  ngOnInit() { }

  public toggleCollapseShow(classes: string): void {
    this.collapseShow = classes;
  }

  public goTo(go: string) {
    this.router.navigate([go]);
  }
}
