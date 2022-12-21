import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScavengerhuntComponent } from './scavengerhunt.component';

describe('ScavengerhuntComponent', () => {
  let component: ScavengerhuntComponent;
  let fixture: ComponentFixture<ScavengerhuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScavengerhuntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScavengerhuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
