import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInformation3Component } from './main-information-3.component';

describe('MainInformation3Component', () => {
  let component: MainInformation3Component;
  let fixture: ComponentFixture<MainInformation3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInformation3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainInformation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
