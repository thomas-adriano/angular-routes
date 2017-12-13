import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSharedComponent } from './dashboard-shared.component';

describe('DashboardSharedComponent', () => {
  let component: DashboardSharedComponent;
  let fixture: ComponentFixture<DashboardSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
