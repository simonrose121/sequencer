import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ScotchyScotchAppComponent } from '../app/scotchy-scotch.component';

beforeEachProviders(() => [ScotchyScotchAppComponent]);

describe('App: ScotchyScotch', () => {
  it('should create the app',
      inject([ScotchyScotchAppComponent], (app: ScotchyScotchAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'scotchy-scotch works!\'',
      inject([ScotchyScotchAppComponent], (app: ScotchyScotchAppComponent) => {
    expect(app.title).toEqual('scotchy-scotch works!');
  }));
});
