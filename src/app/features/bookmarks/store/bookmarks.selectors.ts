import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, BookmarkState } from './bookmarks.reducer';

export const selectBookmarkState = createFeatureSelector<BookmarkState>('bookmarks');

const { selectAll } = adapter.getSelectors();

export const selectAllBookmarks = createSelector(
  selectBookmarkState,
  selectAll
);

export const selectBookmarksLoading = createSelector(
  selectBookmarkState,
  (state) => state.loading
);

export const selectBookmarksError = createSelector(
  selectBookmarkState,
  (state) => state.error
);
