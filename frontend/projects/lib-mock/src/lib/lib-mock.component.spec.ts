import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMockComponent } from './lib-mock.component';

describe('LibMockComponent', () => {
  let component: LibMockComponent;
  let fixture: ComponentFixture<LibMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibMockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
