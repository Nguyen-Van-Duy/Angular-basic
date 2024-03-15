import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMuiComponent } from './demo-mui.component';

describe('DemoMuiComponent', () => {
  let component: DemoMuiComponent;
  let fixture: ComponentFixture<DemoMuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoMuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
