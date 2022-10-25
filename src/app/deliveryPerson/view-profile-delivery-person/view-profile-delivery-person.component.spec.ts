import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileDeliveryPersonComponent } from './view-profile-delivery-person.component';

describe('ViewProfileDeliveryPersonComponent', () => {
  let component: ViewProfileDeliveryPersonComponent;
  let fixture: ComponentFixture<ViewProfileDeliveryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileDeliveryPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
