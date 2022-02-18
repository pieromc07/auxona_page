import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCircularComponent } from './card-circular.component';

describe('CardCircularComponent', () => {
  let component: CardCircularComponent;
  let fixture: ComponentFixture<CardCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
