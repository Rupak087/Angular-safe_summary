import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBadgeComponent } from './floating-badge.component';

describe('FloatingBadgeComponent', () => {
  let component: FloatingBadgeComponent;
  let fixture: ComponentFixture<FloatingBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingBadgeComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
