import { BookmarkLayoutComponent } from './components/bookmark-layout/bookmark-layout.component';
import { Routes } from '@angular/router';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkCreateComponent } from './components/bookmark-create/bookmark-create.component';
import { BookmarkEditComponent } from './components/bookmark-edit/bookmark-edit.component';

export const BookmarksRoutes: Routes = [
  {
    path: '',
    component: BookmarkLayoutComponent,
    children: [
      { path: '', component: BookmarkListComponent },
      { path: 'create', component: BookmarkCreateComponent },
      { path: 'edit/:id', component: BookmarkEditComponent }
    ]
  }
];
