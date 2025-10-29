import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Bookmark } from '../../../../core/models/bookmark.model';
import { BookmarkActions } from '../../store/bookmarks.actions';
import { BookmarkState } from '../../store/bookmarks.reducer';

@Component({
  standalone: false,
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrls: ['./bookmark-edit.component.scss'],
})
export class BookmarkEditComponent implements OnInit {
  bookmarkId!: number;
  selectedBookmark?: Partial<Bookmark>;

  constructor(
    private store: Store<{ bookmarks: BookmarkState }>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookmarkId = Number(this.route.snapshot.paramMap.get('id'));
    this.store
      .select((state) => state.bookmarks.entities[this.bookmarkId])
      .subscribe((bookmark) => {
        if (bookmark) {
          this.selectedBookmark = { ...bookmark };
        }
      });
  }

  onSave(changes: Partial<Bookmark>) {
    this.store.dispatch(BookmarkActions.updateBookmark({ id: this.bookmarkId, changes }));
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
