import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserCommentComponent } from './delete-user-comment.component';

describe('DeleteUserCommentComponent', () => {
  let component: DeleteUserCommentComponent;
  let fixture: ComponentFixture<DeleteUserCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
