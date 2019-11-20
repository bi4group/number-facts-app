import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MagicNumberComponent} from './magic-number.component';
import {MagicNumberService} from "../../services/magic-number.service";
import {MockMagicNumberService} from "../../mocks/mock.services";

describe('MagicNumberComponent', () => {
  let component: MagicNumberComponent;
  let fixture: ComponentFixture<MagicNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MagicNumberComponent],
      providers: [
        {provide: MagicNumberService, useValue: new MockMagicNumberService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
