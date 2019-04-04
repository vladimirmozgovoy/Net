import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StellageComponent } from './stellage.component';

describe('StellageComponent', () => {
  let component: StellageComponent;
  let fixture: ComponentFixture<StellageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StellageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StellageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
