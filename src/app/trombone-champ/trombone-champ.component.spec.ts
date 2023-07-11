import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TromboneChampComponent } from './trombone-champ.component';

describe('TromboneChampComponent', () => {
  let component: TromboneChampComponent;
  let fixture: ComponentFixture<TromboneChampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TromboneChampComponent]
    });
    fixture = TestBed.createComponent(TromboneChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
