import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../../../core/models/bookmark.model';
import { BookmarkActions } from '../../store/bookmarks.actions';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../../store/bookmarks.reducer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.component.html',
  styleUrls: ['./bookmark-create.component.scss'],
})
export class BookmarkCreateComponent implements OnInit {
  bookmarkForm: FormGroup;

  constructor(
    private store: Store<{ bookmarks: BookmarkState }>,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.bookmarkForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formBookmark: Partial<Bookmark> = this.bookmarkForm.value;
    this.store.dispatch(
      BookmarkActions.createBookmark({ bookmark: formBookmark as Omit<Bookmark, 'id'> })
    );
    this.router.navigate(['/']);
  }
}
