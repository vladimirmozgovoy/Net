import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreReportsComponent } from './more-reports.component';

describe('MoreReportsComponent', () => {
  let component: MoreReportsComponent;
  let fixture: ComponentFixture<MoreReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
