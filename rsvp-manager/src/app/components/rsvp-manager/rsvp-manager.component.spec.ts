import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpManagerComponent } from './rsvp-manager.component';

describe('RsvpManagerComponent', () => {
  let component: RsvpManagerComponent;
  let fixture: ComponentFixture<RsvpManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsvpManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
