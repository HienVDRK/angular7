import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenRouteComponent } from './children-route.component';

describe('ChildrenRouteComponent', () => {
  let component: ChildrenRouteComponent;
  let fixture: ComponentFixture<ChildrenRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
