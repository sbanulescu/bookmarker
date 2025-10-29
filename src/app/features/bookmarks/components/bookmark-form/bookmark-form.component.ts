import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bookmark } from '../../../../core/models/bookmark.model';

@Component({
  standalone: false,
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss'],
})
export class BookmarkFormComponent implements OnInit {
  @Input() bookmark?: Partial<Bookmark> | null;
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() headerTitle?: string | null = null;
  @Input() headerSubtitle?: string | null = null;

  @Output() save = new EventEmitter<Partial<Bookmark>>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {
    if (this.bookmark) {
      this.form.patchValue({
        title: this.bookmark.title || '',
        url: this.bookmark.url || '',
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value as Partial<Bookmark>);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
