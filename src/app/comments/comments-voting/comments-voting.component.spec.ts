import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsVotingComponent } from './comments-voting.component';

describe('CommentsVotingComponent', () => {
  let component: CommentsVotingComponent;
  let fixture: ComponentFixture<CommentsVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsVotingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
