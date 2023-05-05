import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoptimizedImgCatalogComponent } from './ngoptimized-img-catalog.component';

describe('NgoptimizedImgCatalogComponent', () => {
  let component: NgoptimizedImgCatalogComponent;
  let fixture: ComponentFixture<NgoptimizedImgCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgoptimizedImgCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgoptimizedImgCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
