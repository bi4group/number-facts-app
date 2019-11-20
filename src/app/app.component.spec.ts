import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MagicNumberService} from "../services/magic-number.service";
import {MockMagicNumberService} from "../mocks/mock.services";
import {MatInputModule} from "@angular/material/input";
import {Component, Input} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        TestMagicNumberComponent
      ],
      providers: [
        {provide: MagicNumberService, useValue: new MockMagicNumberService()}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'number-facts-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Magic Number - Facts');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Magic Number - Facts');
  });
});

@Component({
  selector: 'app-magic-number',
  template: ''
})
export class TestMagicNumberComponent {
  @Input() public magicNumber;
}
