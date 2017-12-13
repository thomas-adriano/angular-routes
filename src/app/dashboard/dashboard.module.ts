import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardViewAComponent } from "./dashboard-view-a/dashboard-view-a.component";
import { DashboardViewBComponent } from "./dashboard-view-b/dashboard-view-b.component";
import { DashboardViewCComponent } from "./dashboard-view-c/dashboard-view-c.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardSharedComponent } from './shared/dashboard-shared/dashboard-shared.component';
import { DashboardServiceService } from './shared/dashboard-service.service';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  exports: [DashboardComponent],
  declarations: [
    DashboardViewAComponent,
    DashboardViewBComponent,
    DashboardViewCComponent,
    DashboardComponent,
    DashboardSharedComponent
  ],
  providers: [DashboardServiceService]
})
export class DashboardModule {}
