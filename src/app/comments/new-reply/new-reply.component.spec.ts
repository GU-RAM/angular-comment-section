import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReplyComponent } from './new-reply.component';

describe('NewReplyComponent', () => {
  let component: NewReplyComponent;
  let fixture: ComponentFixture<NewReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
