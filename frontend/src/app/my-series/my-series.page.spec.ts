import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySeriesPage } from './my-series.page';

describe('MySeriesPage', () => {
  let component: MySeriesPage;
  let fixture: ComponentFixture<MySeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MySeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
