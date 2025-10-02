import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieFormPage } from './serie-form.page';

describe('SerieFormPage', () => {
  let component: SerieFormPage;
  let fixture: ComponentFixture<SerieFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
