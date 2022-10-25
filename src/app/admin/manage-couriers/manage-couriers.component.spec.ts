import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCouriersComponent } from './manage-couriers.component';

describe('ManageCouriersComponent', () => {
  let component: ManageCouriersComponent;
  let fixture: ComponentFixture<ManageCouriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCouriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCouriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
