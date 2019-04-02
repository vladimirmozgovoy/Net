import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReportsComponent } from './info-reports.component';

describe('InfoReportsComponent', () => {
  let component: InfoReportsComponent;
  let fixture: ComponentFixture<InfoReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
