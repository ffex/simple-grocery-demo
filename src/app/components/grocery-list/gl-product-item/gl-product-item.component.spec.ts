import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlProductItemComponent } from './gl-product-item.component';

describe('GlProductItemComponent', () => {
  let component: GlProductItemComponent;
  let fixture: ComponentFixture<GlProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
