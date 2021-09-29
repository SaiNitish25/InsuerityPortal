import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomsumerpropertyComponent } from './viewcomsumerproperty.component';

describe('ViewcomsumerpropertyComponent', () => {
  let component: ViewcomsumerpropertyComponent;
  let fixture: ComponentFixture<ViewcomsumerpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcomsumerpropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcomsumerpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
