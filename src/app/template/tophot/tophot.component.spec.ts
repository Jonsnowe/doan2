import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TophotComponent } from './tophot.component';

describe('TophotComponent', () => {
  let component: TophotComponent;
  let fixture: ComponentFixture<TophotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TophotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TophotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
