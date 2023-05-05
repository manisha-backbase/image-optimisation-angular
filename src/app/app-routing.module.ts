import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: 'native-img-catalog',
  loadChildren: () =>
    import('./native-img-catalog/native-img-catalog.module').then(
      (m) => m.NativeImgCatalogModule
    )
},
{
  path: 'ngoptimized-img-catalog',
  loadChildren: () =>
    import('./ngoptimized-img-catalog/ngoptimized-img-catalog.module').then(
      (m) => m.NgoptimizedImgCatalogModule
    )
    },]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
