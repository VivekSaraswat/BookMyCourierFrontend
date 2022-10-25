import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileDeliveryPersonComponent } from './update-profile-delivery-person.component';

describe('UpdateProfileDeliveryPersonComponent', () => {
  let component: UpdateProfileDeliveryPersonComponent;
  let fixture: ComponentFixture<UpdateProfileDeliveryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileDeliveryPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfileDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
