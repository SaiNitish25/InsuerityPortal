import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebusinesspropertyComponent } from './createbusinessproperty.component';

describe('CreatebusinesspropertyComponent', () => {
  let component: CreatebusinesspropertyComponent;
  let fixture: ComponentFixture<CreatebusinesspropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebusinesspropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebusinesspropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
