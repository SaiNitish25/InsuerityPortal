import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebusinesspropertyComponent } from './updatebusinessproperty.component';

describe('UpdatebusinesspropertyComponent', () => {
  let component: UpdatebusinesspropertyComponent;
  let fixture: ComponentFixture<UpdatebusinesspropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebusinesspropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebusinesspropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
