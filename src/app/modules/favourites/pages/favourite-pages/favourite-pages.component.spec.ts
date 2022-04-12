import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePagesComponent } from './favourite-pages.component';

describe('FavouritePagesComponent', () => {
  let component: FavouritePagesComponent;
  let fixture: ComponentFixture<FavouritePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
