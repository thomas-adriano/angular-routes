import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardViewAComponent } from "./dashboard-view-a/dashboard-view-a.component";
import { DashboardViewBComponent } from "./dashboard-view-b/dashboard-view-b.component";
import { DashboardViewCComponent } from "./dashboard-view-c/dashboard-view-c.component";

const routes: Routes = [
  { path: "component-a", component: DashboardViewAComponent },
  { path: "component-b", component: DashboardViewBComponent },
  { path: "component-c", component: DashboardViewCComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
