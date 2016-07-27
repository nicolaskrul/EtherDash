/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { Dashboard } from './app.component';

describe('App: Heimdall', () => {
  beforeEach(() => {
    addProviders([Dashboard]);
  });

  it('should create the app',
    inject([Dashboard], (app: Dashboard) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([Dashboard], (app: Dashboard) => {
      expect(app.title).toEqual('app works!');
    }));
});
