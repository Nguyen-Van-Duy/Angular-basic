import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppFormComponent } from './in-app-form.component';

describe('InAppFormComponent', () => {
  let component: InAppFormComponent;
  let fixture: ComponentFixture<InAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InAppFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
