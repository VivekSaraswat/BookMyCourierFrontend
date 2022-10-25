import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMyCourierComponent } from './book-my-courier.component';

describe('BookMyCourierComponent', () => {
  let component: BookMyCourierComponent;
  let fixture: ComponentFixture<BookMyCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMyCourierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMyCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
