import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mov-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public collapseShow = false;
  public collapseShowClasses = 'hidden';

  constructor(private router: Router) { }

  ngOnInit() { }

  public toggleCollapseShow(classes: string): void {
    this.collapseShow = !this.collapseShow;
    this.collapseShowClasses = classes;
  }

  public goTo(go: string) {
    if (this.collapseShow) {
      this.toggleCollapseShow('hidden');
    }
    this.router.navigate([go]);
  }
}
