import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-bookmark-layout',
  templateUrl: './bookmark-layout.component.html',
  styleUrl: './bookmark-layout.component.scss',
  host: { class: 'bookmark-layout' },
  encapsulation: ViewEncapsulation.None

})
export class BookmarkLayoutComponent implements OnInit {
  searchQuery = '';

  constructor() {}

  ngOnInit(): void {}

  onSearch(query: any): void {
    console.log('Search query:', query);
  }
}
