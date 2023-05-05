import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeImgCatalogComponent } from './native-img-catalog.component';

describe('NativeImgCatalogComponent', () => {
  let component: NativeImgCatalogComponent;
  let fixture: ComponentFixture<NativeImgCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NativeImgCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NativeImgCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
