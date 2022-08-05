import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreAppComponent } from './book-store-app.component';

describe('BookStoreAppComponent', () => {
  let component: BookStoreAppComponent;
  let fixture: ComponentFixture<BookStoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStoreAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
