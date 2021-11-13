import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesListItem } from '../../models';
@Component({
  selector: 'mov-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListItemComponent implements OnInit {

  @Input() movieData: MoviesListItem;
  @Output() goToDetailEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public goToDetail(): void {
    this.goToDetailEvent.emit();
  }

}
