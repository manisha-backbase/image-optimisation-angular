import { Component } from '@angular/core';

@Component({
  selector: 'app-ngoptimized-img-catalog',
  templateUrl: './ngoptimized-img-catalog.component.html',
  styleUrls: ['./ngoptimized-img-catalog.component.scss'],
})
export class NgoptimizedImgCatalogComponent {

  public imgList = [{ name: "custom-img.webp", width: 400, height: 400, priority: true },
  { name: "business-img.webp", width: 300, height: 300, priority: true },
  { name: "holidays-img.webp", width: 400, height: 400, priority: true },
  { name: "new-phone-img.webp", width: 400, height: 400, priority: true },
  { name: "savings-img.webp", width: 400, height: 400, priority: true },
  { name: "gift-img.webp", width: 400, height: 400, priority: true },
  { name: "new-car-img.webp", width: 400, height: 400, priority: true },
  { name: "insurance-img.webp", width: 400, height: 400, priority: true },
  { name: "home-img.webp", width: 400, height: 400, priority: true },
  { name: "rent-img.webp", width: 400, height: 400, priority: true },
  { name: "manage-pockets-empty-state-img.webp.webp", width: 400, height: 400, priority: true }]
  catalogImageDir(imgName: string): string {
    return `./assets/content/${imgName}-img.webp`;
  }
}
