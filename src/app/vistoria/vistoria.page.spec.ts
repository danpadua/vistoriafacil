import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistoriaPage } from './vistoria.page';

describe('VistoriaPage', () => {
  let component: VistoriaPage;
  let fixture: ComponentFixture<VistoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
