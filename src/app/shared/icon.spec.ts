import { ComponentFixture, TestBed, async, tick } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA }    from '@angular/core';

import { Component } from '@angular/core';

import { IconDirective } from './icon.directive';

@Component({
  selector: '[icon]',
  template: `<div icon [id]="11"></div>`
})
class TestComponent {}

describe('icon directive', () => {
    let comp:    IconDirective;
    let fixture: ComponentFixture<IconDirective>;
    let des:      DebugElement;
    let el:      HTMLElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ IconDirective, TestComponent ]
      }).compileComponents();
    });

    it('should be able to test directive', () => {
        const fixture = TestBed.createComponent(TestComponent);
        const el = fixture.debugElement.query(By.directive(IconDirective));
        expect(el).not.toBeNull();
      })
      // TestBed.overrideComponent(TestComponent, {
      //   set: {
      //     template: '<div icon [id]="11"></div>'
      //   }
      // })

  //   TestBed.compileComponents().then(() => {
  //   const fixture = TestBed.createComponent(TestComponent);
  //   const directiveEl = fixture.debugElement.query(By.directive(IconDirective));
  //   expect(directiveEl).not.toBeNull();
  // });
});
