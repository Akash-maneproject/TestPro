import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappdataComponent } from './newappdata.component';

describe('NewappdataComponent', () => {
  let component: NewappdataComponent;
  let fixture: ComponentFixture<NewappdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewappdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewappdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
