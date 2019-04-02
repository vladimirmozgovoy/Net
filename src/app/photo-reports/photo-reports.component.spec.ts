import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoReportsComponent } from './photo-reports.component';

describe('PhotoReportsComponent', () => {
  let component: PhotoReportsComponent;
  let fixture: ComponentFixture<PhotoReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
