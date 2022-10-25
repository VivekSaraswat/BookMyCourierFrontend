import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourierComponent } from './my-courier.component';

describe('MyCourierComponent', () => {
  let component: MyCourierComponent;
  let fixture: ComponentFixture<MyCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCourierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
