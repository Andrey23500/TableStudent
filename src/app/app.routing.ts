import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { TableComponent } from "./modules/table-form/table/table.component";

const routes: Routes = [
  { path: "", component: TableComponent },
  { path: "404", component: NotFoundPageComponent },
  { path: "**", redirectTo: "/404" },
];

export const routing = RouterModule.forRoot(routes);
