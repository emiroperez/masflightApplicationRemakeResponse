import { async, TestBed } from '@angular/core/testing';
import { AdminMenuRecursiveComponent } from './admin-menu-recursive.component';
describe('AdminMenuRecursiveComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminMenuRecursiveComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminMenuRecursiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-menu-recursive.component.spec.js.map