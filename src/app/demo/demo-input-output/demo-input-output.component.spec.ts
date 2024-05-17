import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputOutputComponent } from './demo-input-output.component';

describe('DemoInputOutputComponent', () => {
  let component: DemoInputOutputComponent;
  let fixture: ComponentFixture<DemoInputOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoInputOutputComponent]
    });
    fixture = TestBed.createComponent(DemoInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
