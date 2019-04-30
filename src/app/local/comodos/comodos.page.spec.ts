import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodosPage } from './comodos.page';

describe('ComodosPage', () => {
  let component: ComodosPage;
  let fixture: ComponentFixture<ComodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComodosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
