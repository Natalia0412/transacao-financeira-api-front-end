import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "client", loadChildren:()=> import("./client/client-create/client.module").then(m=>m.ClientModule)},
  {path:"client-list", loadChildren:()=> import("./client/client-list/client-list.module").then(m=>m.ClientListModule)},
  { path: 'company-create', loadChildren: () => import('./company/company-create/company-create.module').then(m => m.CompanyCreateModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
