import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadReadComponent } from './load-read.component';

describe('LoadReadComponent', () => {
  let component: LoadReadComponent;
  let fixture: ComponentFixture<LoadReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
