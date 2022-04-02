import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceSlipComponent } from './advice-slip.component';

describe('AdviceSlipComponent', () => {
  let component: AdviceSlipComponent;
  let fixture: ComponentFixture<AdviceSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
