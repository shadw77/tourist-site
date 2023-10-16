import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 

  {
    path:'discover',loadChildren: () => import('src/app/discovermodule/discovermodule.module')
    .then(m=>m.DiscovermoduleModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
