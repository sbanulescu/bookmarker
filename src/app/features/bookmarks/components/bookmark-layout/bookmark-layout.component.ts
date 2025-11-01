import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookmarkService } from '../../bookmark.service';

@Component({
  standalone: false,
  selector: 'app-bookmark-layout',
  templateUrl: './bookmark-layout.component.html',
  styleUrl: './bookmark-layout.component.scss',
  host: { class: 'bookmark-layout' },
  encapsulation: ViewEncapsulation.None,
})
export class BookmarkLayoutComponent implements OnInit {
  searchQuery = '';

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {}

  onSearch(query: string): void {
    this.bookmarkService.setSearchQuery(query);
  }
}
