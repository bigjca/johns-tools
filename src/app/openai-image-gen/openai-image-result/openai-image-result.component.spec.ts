import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiImageResultComponent } from './openai-image-result.component';

describe('OpenaiImageResultComponent', () => {
  let component: OpenaiImageResultComponent;
  let fixture: ComponentFixture<OpenaiImageResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenaiImageResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenaiImageResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
