import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../../../core/models/bookmark.model';
import { BookmarkActions } from '../../store/bookmarks.actions';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../../store/bookmarks.reducer';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.component.html',
  styleUrls: ['./bookmark-create.component.scss'],
})
export class BookmarkCreateComponent implements OnInit {
  // delegate form to reusable component
  constructor(private store: Store<{ bookmarks: BookmarkState }>, private router: Router) {}

  ngOnInit(): void {}

  onSave(bookmark: Partial<Bookmark>) {
    this.store.dispatch(BookmarkActions.createBookmark({ bookmark: bookmark as Omit<Bookmark, 'id'> }));
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
