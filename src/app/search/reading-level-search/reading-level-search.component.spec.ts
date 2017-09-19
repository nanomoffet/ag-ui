import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingLevelSearchComponent } from './reading-level-search.component';

describe('ReadingLevelSearchComponent', () => {
  let component: ReadingLevelSearchComponent;
  let fixture: ComponentFixture<ReadingLevelSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingLevelSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingLevelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
