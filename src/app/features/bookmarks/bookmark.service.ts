import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bookmark } from '../../core/models/bookmark.model';

@Injectable({ providedIn: 'root' })
export class BookmarkService {
  private readonly apiUrl = 'api/bookmarks';
  private searchQuerySubject = new BehaviorSubject<string>('');
  public searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();


  constructor(private http: HttpClient) {}

   setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.apiUrl);
  }

  createBookmark(bookmark: Omit<Bookmark, 'id'>): Observable<Bookmark> {
    const newBookmark = {
      ...bookmark,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return this.http.post<Bookmark>(this.apiUrl, newBookmark);
  }

  updateBookmark(id: number, bookmark: Partial<Bookmark>): Observable<Bookmark> {
    const updatedBookmark = {
      ...bookmark,
      updatedAt: new Date().toISOString(),
    };
    return this.http.put<Bookmark>(`${this.apiUrl}/${id}`, updatedBookmark);
  }

  deleteBookmark(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
