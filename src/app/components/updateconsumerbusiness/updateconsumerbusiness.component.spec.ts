import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconsumerbusinessComponent } from './updateconsumerbusiness.component';

describe('UpdateconsumerbusinessComponent', () => {
  let component: UpdateconsumerbusinessComponent;
  let fixture: ComponentFixture<UpdateconsumerbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconsumerbusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateconsumerbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
