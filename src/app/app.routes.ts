import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/bookmarks/bookmarks.module').then(
        (m) => m.BookmarksModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
