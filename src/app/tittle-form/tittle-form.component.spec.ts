import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleFormComponent } from './tittle-form.component';

describe('TittleFormComponent', () => {
  let component: TittleFormComponent;
  let fixture: ComponentFixture<TittleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TittleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TittleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
