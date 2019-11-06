import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertComponentComponent } from './upsert-component.component';

describe('UpsertComponentComponent', () => { 
  let component: UpsertComponentComponent;
  let fixture: ComponentFixture<UpsertComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsertComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
