import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWalletDeliveryPersonComponent } from './my-wallet-delivery-person.component';

describe('MyWalletDeliveryPersonComponent', () => {
  let component: MyWalletDeliveryPersonComponent;
  let fixture: ComponentFixture<MyWalletDeliveryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWalletDeliveryPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWalletDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
