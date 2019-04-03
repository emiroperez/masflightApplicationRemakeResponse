import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroWelcomeComponent } from './intro-welcome.component';

describe('IntroWelcomeComponent', () => {
  let component: IntroWelcomeComponent;
  let fixture: ComponentFixture<IntroWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
