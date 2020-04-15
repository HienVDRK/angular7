import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyServicesComponent } from './dependency-services.component';

describe('DependencyServicesComponent', () => {
  let component: DependencyServicesComponent;
  let fixture: ComponentFixture<DependencyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
