import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRecursiveDashboardComponent } from './menu-recursive-dashboard.component';

describe('MenuRecursiveDashboardComponent', () => {
  let component: MenuRecursiveDashboardComponent;
  let fixture: ComponentFixture<MenuRecursiveDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRecursiveDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRecursiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
