import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookmarkActions } from '../../store/bookmarks.actions';
import { BookmarkState } from '../../store/bookmarks.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { Bookmark } from '../../../../core/models/bookmark.model';
import { selectAllBookmarks, selectBookmarksLoading } from '../../store/bookmarks.selectors';
import { debounceTime } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent implements OnInit {
  bookmarks$!: Observable<Bookmark[]>;
  loading$!: Observable<boolean>;
  constructor(private store: Store<{ bookmarks: BookmarkState }>) {}

  ngOnInit(): void {
    this.store.dispatch(BookmarkActions.loadBookmarks());
    this.bookmarks$ = this.store.select(selectAllBookmarks);
    this.loading$ = this.store.select(selectBookmarksLoading);

    this.bookmarks$.pipe(debounceTime(200)).subscribe((data) => {
      console.log('Bookmarks:', data);
    });
  }
  deleteBookmark(id: number): void {
    this.store.dispatch(BookmarkActions.deleteBookmark({ id }));
  }
}
