import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDuenioComponent } from './listado-duenio.component';

describe('ListadoDuenioComponent', () => {
  let component: ListadoDuenioComponent;
  let fixture: ComponentFixture<ListadoDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDuenioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
