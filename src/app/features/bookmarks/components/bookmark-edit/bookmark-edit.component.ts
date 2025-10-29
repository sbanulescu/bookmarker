import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  bookmarkForm: FormGroup;
  bookmarkId!: number;


  constructor(
    private store: Store<{ bookmarks: BookmarkState }>,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookmarkForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {
    this.bookmarkId = Number(this.route.snapshot.paramMap.get('id'));
     this.store
    .select(state => state.bookmarks.entities[this.bookmarkId])
    .subscribe(bookmark => {
      if (bookmark) {
        this.bookmarkForm.patchValue({
          title: bookmark.title,
          url: bookmark.url,
        });
      }
    });
  }

  onSubmit(): void {
    const formBookmark: Partial<Bookmark> = this.bookmarkForm.value;
    this.store.dispatch(
      BookmarkActions.updateBookmark({ id: this.bookmarkId, changes: formBookmark })
    );
    this.router.navigate(['/']);
  }
}
