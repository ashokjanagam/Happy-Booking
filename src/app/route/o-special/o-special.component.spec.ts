import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSpecialComponent } from './o-special.component';

describe('OSpecialComponent', () => {
  let component: OSpecialComponent;
  let fixture: ComponentFixture<OSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
