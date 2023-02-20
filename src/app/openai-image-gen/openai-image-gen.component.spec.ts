import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiImageGenComponent } from './openai-image-gen.component';

describe('OpenaiImageGenComponent', () => {
  let component: OpenaiImageGenComponent;
  let fixture: ComponentFixture<OpenaiImageGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenaiImageGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenaiImageGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
