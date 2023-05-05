import { Component } from '@angular/core';

@Component({
  selector: 'app-native-img-catalog',
  templateUrl: './native-img-catalog.component.html',
  styleUrls: ['./native-img-catalog.component.scss'],
})
export class NativeImgCatalogComponent {
  public imgList=[{ name: "img1.jpeg", width: 400, height: 400, priority: true },
  { name: "img2.jpeg", width: 300, height: 300, priority: true },
  { name: "img3.jpeg", width: 400, height: 400, priority: true },
  { name: "img4.jpeg", width: 400, height: 400, priority: true },
  { name: "img5.jpeg", width: 400, height: 400, priority: true },
  { name: "img6.jpeg", width: 400, height: 400, priority: true },
  { name: "img7.jpeg", width: 400, height: 400, priority: true }];
}
