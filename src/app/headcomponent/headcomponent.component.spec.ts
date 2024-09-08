import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcomponentComponent } from './headcomponent.component';

describe('HeadcomponentComponent', () => {
  let component: HeadcomponentComponent;
  let fixture: ComponentFixture<HeadcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
