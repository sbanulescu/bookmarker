import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BookmarkActions } from './bookmarks.actions';
import { BookmarkService } from '../bookmark.service';

@Injectable()
export class BookmarkEffects {
  private readonly actions$ = inject(Actions);
  private readonly bookmarkService = inject(BookmarkService);

  loadBookmarks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.loadBookmarks),
      mergeMap(() =>
        this.bookmarkService.getBookmarks().pipe(
          map(bookmarks => BookmarkActions.loadBookmarksSuccess({ bookmarks })),
          catchError(error =>
            of(BookmarkActions.loadBookmarksFailure({ error: error.message }))
          )
        )
      )
    )
  );
  createBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.createBookmark),
      mergeMap(({ bookmark }) =>
        this.bookmarkService.createBookmark(bookmark).pipe(
          map(bookmark => BookmarkActions.createBookmarkSuccess({ bookmark })),
          catchError(error =>
            of(BookmarkActions.createBookmarkFailure({ error: error.message }))
          )
        )
      )
    )
  );
  updateBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.updateBookmark),
      mergeMap(({ id, changes }) =>
        this.bookmarkService.updateBookmark(id, changes).pipe(
          map(bookmark => BookmarkActions.updateBookmarkSuccess({ bookmark })),
          catchError(error =>
            of(BookmarkActions.updateBookmarkFailure({ error: error.message }))
          )
        )
      )
    )
  );
  deleteBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.deleteBookmark),
      mergeMap(({ id }) =>
        this.bookmarkService.deleteBookmark(id).pipe(
          map(() => BookmarkActions.deleteBookmarkSuccess({ id })),
          catchError(error =>
            of(BookmarkActions.deleteBookmarkFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
