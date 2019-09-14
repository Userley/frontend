import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SostenibilidadComponent } from './sostenibilidad.component';

describe('SostenibilidadComponent', () => {
  let component: SostenibilidadComponent;
  let fixture: ComponentFixture<SostenibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SostenibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SostenibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
