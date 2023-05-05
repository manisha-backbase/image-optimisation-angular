import { Component } from '@angular/core';

@Component({
  selector: 'app-ngoptimized-img-catalog',
  templateUrl: './ngoptimized-img-catalog.component.html',
  styleUrls: ['./ngoptimized-img-catalog.component.scss'],
})
export class NgoptimizedImgCatalogComponent {

  public imgList = [{ name: "custom-img.webp", width: 400, height: 400, priority: true },
  { name: "business-img.webp", width: 300, height: 300, priority: true },
  { name: "default-image.jpg", width: 400, height: 400, priority: true }]

  catalogImageDir(imgName: string): string {
    return `./assets/content/${imgName}-img.webp`;
  }
}
