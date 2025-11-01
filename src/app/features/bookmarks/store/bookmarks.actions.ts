import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Bookmark } from '../../../core/models/bookmark.model';

export const BookmarkActions = createActionGroup({
  source: 'Bookmark',
  events: {
    'Load Bookmarks': emptyProps(),
    'Load Bookmarks Success': props<{ bookmarks: Bookmark[] }>(),
    'Load Bookmarks Failure': props<{ error: string }>(),
    'Create Bookmark': props<{ bookmark: Omit<Bookmark, 'id'> }>(),
    'Create Bookmark Success': props<{ bookmark: Bookmark }>(),
    'Create Bookmark Failure': props<{ error: string }>(),
    'Update Bookmark': props<{ id: number; changes: Partial<Bookmark> }>(),
    'Update Bookmark Success': props<{ bookmark: Bookmark }>(),
    'Update Bookmark Failure': props<{ error: string }>(),
    'Delete Bookmark': props<{ id: number }>(),
    'Delete Bookmark Success': props<{ id: number }>(),
    'Delete Bookmark Failure': props<{ error: string }>(),
  }
});
