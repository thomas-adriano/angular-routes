import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewCComponent } from './dashboard-view-c.component';

describe('DashboardViewCComponent', () => {
  let component: DashboardViewCComponent;
  let fixture: ComponentFixture<DashboardViewCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
