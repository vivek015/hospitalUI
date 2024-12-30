import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecptionComponent } from './recption.component';

describe('RecptionComponent', () => {
  let component: RecptionComponent;
  let fixture: ComponentFixture<RecptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
