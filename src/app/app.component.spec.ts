import {
    TestBed
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('Component: AppComponent', () => {
    let component: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });

        const fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});