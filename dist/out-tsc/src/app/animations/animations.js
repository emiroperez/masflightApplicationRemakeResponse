import { trigger, animate, style, group, query, transition } from '@angular/animations';
export var routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ group([
            query(':enter', [style({ opacity: 0 }), animate('.5s ease-in-out', style({ opacity: 1 }))], { optional: true }),
            query(':leave', [style({ transform: 'translateX(0%)' }), animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))], { optional: true }),
        ])
    ])
]);
//# sourceMappingURL=animations.js.map