import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHoldComponent } from './place-hold.component';

describe('PlaceHoldComponent', () => {
  let component: PlaceHoldComponent;
  let fixture: ComponentFixture<PlaceHoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceHoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
