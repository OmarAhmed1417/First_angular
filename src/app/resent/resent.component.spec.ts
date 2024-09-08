import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentComponent } from './resent.component';

describe('ResentComponent', () => {
  let component: ResentComponent;
  let fixture: ComponentFixture<ResentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
