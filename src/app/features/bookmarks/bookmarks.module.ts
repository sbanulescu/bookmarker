import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { BookmarkCreateComponent } from './components/bookmark-create/bookmark-create.component';
import { BookmarkEditComponent } from './components/bookmark-edit/bookmark-edit.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { BookmarksRoutes } from './bookmarks.routes';
import { MaterialModule } from '../../shared/material.module';
import { BookmarkLayoutComponent } from './components/bookmark-layout/bookmark-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookmarkCreateComponent,
    BookmarkEditComponent,
    BookmarkListComponent,
    BookmarkLayoutComponent,
    BookmarkFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(BookmarksRoutes), MaterialModule, RouterLink, FormsModule, ReactiveFormsModule],
  exports: [],
})
export class BookmarksModule {}
