import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioUtentiComponent } from './dettaglio-utenti.component';

describe('DettaglioUtentiComponent', () => {
  let component: DettaglioUtentiComponent;
  let fixture: ComponentFixture<DettaglioUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
