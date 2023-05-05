import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRoutes } from '@angular/router';

import { NativeImgCatalogComponent } from './native-img-catalog.component'


@NgModule({
  declarations: [NativeImgCatalogComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    provideRoutes([
      {
        path: '',
        component: NativeImgCatalogComponent,
      },
    ]),
  ],
})
export class NativeImgCatalogModule { }
