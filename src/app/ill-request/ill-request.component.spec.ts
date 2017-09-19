import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllRequestComponent } from './ill-request.component';

describe('IllRequestComponent', () => {
  let component: IllRequestComponent;
  let fixture: ComponentFixture<IllRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
