import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractiveComponent } from './attractive.component';

describe('AttractiveComponent', () => {
  let component: AttractiveComponent;
  let fixture: ComponentFixture<AttractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
