import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInformation2Component } from './main-information-2.component';

describe('MainInformation2Component', () => {
  let component: MainInformation2Component;
  let fixture: ComponentFixture<MainInformation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInformation2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainInformation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
