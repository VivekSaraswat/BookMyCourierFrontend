import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileAdminComponent } from './view-profile-admin.component';

describe('ViewProfileAdminComponent', () => {
  let component: ViewProfileAdminComponent;
  let fixture: ComponentFixture<ViewProfileAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
