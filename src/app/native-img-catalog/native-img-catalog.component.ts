import { Component } from '@angular/core';

@Component({
  selector: 'app-native-img-catalog',
  templateUrl: './native-img-catalog.component.html',
  styleUrls: ['./native-img-catalog.component.scss'],
})
export class NativeImgCatalogComponent {
  public imgList=["business-img.webp","custom-img.webp","default-image.jpg"]
}
