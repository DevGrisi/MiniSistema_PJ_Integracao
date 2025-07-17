import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoeTambemComponent } from './doe-tambem.component';

describe('DoeTambemComponent', () => {
  let component: DoeTambemComponent;
  let fixture: ComponentFixture<DoeTambemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoeTambemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoeTambemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
