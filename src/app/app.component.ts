import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SharedState} from './store/shared/shared.state';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.state';
import {getLoading} from './store/shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'empCrud';
  showLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.showLoading$ = this.store.select(getLoading);
  }
}
