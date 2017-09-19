import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCatalogSearchComponent } from './kids-catalog-search.component';

describe('KidsCatalogSearchComponent', () => {
  let component: KidsCatalogSearchComponent;
  let fixture: ComponentFixture<KidsCatalogSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsCatalogSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsCatalogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
