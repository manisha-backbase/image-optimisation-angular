import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoptimizedImgListComponent } from './ngoptimized-img-list.component';

describe('NgoptimizedImgListComponent', () => {
  let component: NgoptimizedImgListComponent;
  let fixture: ComponentFixture<NgoptimizedImgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoptimizedImgListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoptimizedImgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
