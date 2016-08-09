/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DemoComponent } from './demo.component';

describe('Component: Demo', () => {
  it('should create an instance', () => {
    let component = new DemoComponent();
    expect(component).toBeTruthy();
  });
});
