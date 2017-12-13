import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewBComponent } from './dashboard-view-b.component';

describe('DashboardViewBComponent', () => {
  let component: DashboardViewBComponent;
  let fixture: ComponentFixture<DashboardViewBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
