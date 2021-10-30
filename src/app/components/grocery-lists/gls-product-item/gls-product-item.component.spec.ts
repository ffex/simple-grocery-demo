import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlsProductItemComponent } from './gls-product-item.component';

describe('GlsProductItemComponent', () => {
  let component: GlsProductItemComponent;
  let fixture: ComponentFixture<GlsProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlsProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlsProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
