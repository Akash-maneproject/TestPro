import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluserdataComponent } from './alluserdata.component';

describe('AlluserdataComponent', () => {
  let component: AlluserdataComponent;
  let fixture: ComponentFixture<AlluserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlluserdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlluserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
