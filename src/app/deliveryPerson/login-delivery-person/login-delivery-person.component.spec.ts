import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDeliveryPersonComponent } from './login-delivery-person.component';

describe('LoginDeliveryPersonComponent', () => {
  let component: LoginDeliveryPersonComponent;
  let fixture: ComponentFixture<LoginDeliveryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDeliveryPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
