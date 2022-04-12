import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutPagesComponent } from './aut-pages.component';

describe('AutPagesComponent', () => {
  let component: AutPagesComponent;
  let fixture: ComponentFixture<AutPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
