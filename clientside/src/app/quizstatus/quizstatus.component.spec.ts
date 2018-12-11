import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizstatusComponent } from './quizstatus.component';

describe('QuizstatusComponent', () => {
  let component: QuizstatusComponent;
  let fixture: ComponentFixture<QuizstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
