import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewAComponent } from './dashboard-view-a.component';

describe('DashboardViewAComponent', () => {
  let component: DashboardViewAComponent;
  let fixture: ComponentFixture<DashboardViewAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
