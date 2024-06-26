import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBindingComponent } from './demo-binding.component';

describe('DemoBindingComponent', () => {
  let component: DemoBindingComponent;
  let fixture: ComponentFixture<DemoBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBindingComponent]
    });
    fixture = TestBed.createComponent(DemoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
