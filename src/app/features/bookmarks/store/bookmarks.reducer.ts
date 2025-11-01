import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Bookmark } from '../../../core/models/bookmark.model';
import { BookmarkActions } from './bookmarks.actions';

export interface BookmarkState extends EntityState<Bookmark> {
  loading: boolean;
  error: string | null;
  query: string;
}

export const adapter = createEntityAdapter<Bookmark>({
  sortComparer: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
});

export const initialState: BookmarkState = adapter.getInitialState({
  loading: false,
  error: null,
  query: '',
});

export const bookmarkReducer = createReducer(
  initialState,

  on(BookmarkActions.loadBookmarks, (state) => ({ ...state, loading: true })),
  on(BookmarkActions.loadBookmarksSuccess, (state, { bookmarks }) =>
    adapter.setAll(bookmarks, { ...state, loading: false })
  ),
  on(BookmarkActions.loadBookmarksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(BookmarkActions.createBookmarkSuccess, (state, { bookmark }) =>
    adapter.addOne(bookmark, state)
  ),
  on(BookmarkActions.updateBookmarkSuccess, (state, { bookmark }) =>
    adapter.updateOne({ id: bookmark.id, changes: bookmark }, state)
  ),
  on(BookmarkActions.deleteBookmarkSuccess, (state, { id }) => adapter.removeOne(id, state)),

);
