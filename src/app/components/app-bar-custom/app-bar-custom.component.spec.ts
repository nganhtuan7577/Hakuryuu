import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarCustomComponent } from './app-bar-custom.component';

describe('AppBarCustomComponent', () => {
  let component: AppBarCustomComponent;
  let fixture: ComponentFixture<AppBarCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
