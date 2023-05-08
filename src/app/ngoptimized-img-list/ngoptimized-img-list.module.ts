import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImageKitLoader, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { RouterModule, provideRoutes } from '@angular/router';
import { NgoptimizedImgListComponent } from './ngoptimized-img-list.component';


@NgModule({
  declarations: [NgoptimizedImgListComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
  ],
  providers: [
    provideImageKitLoader('https://ik.imagekit.io/ith29bzjr/'),
    // {

    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     console.log(config);
    //     const url = config.src && config.width ? `./assets/content/${config.src}-img-${config.width}.webp` : `./assets/content/${config.src}-img.webp`
    //     return url;
    //   }
    // },
    provideRoutes([
      {
        path: '',
        component: NgoptimizedImgListComponent,
      },
    ]),
  ],
  exports: [NgOptimizedImage]
})
export class NgoptimizedImgListModule { }