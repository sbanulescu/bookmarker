import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bookmark } from '../models/bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookmarks: Bookmark[] = [
      {
        id: 1,
        title: 'Angular Documentation',
        url: 'https://angular.io/docs',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // yesterday
        updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: 2,
        title: 'NgRx Store',
        url: 'https://ngrx.io/guide/store',
        createdAt: new Date().toISOString(), // today
        updatedAt: new Date().toISOString(),
      },
      {
        id: 3,
        title: 'Angular Material',
        url: 'https://material.angular.io/',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];
    return { bookmarks };
  }
}
