/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger, } from '@angular/animations';
export var /** @type {?} */ tagAnimation = trigger('tagAnimation', [
    state('*', style({ opacity: 1, transform: 'scale(1)' })),
    transition('void => *', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('150ms linear')
    ]),
    state('void', style({ opacity: 0, transform: 'scale(0)' })),
    transition('* => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('150ms linear')
    ])
]);
//# sourceMappingURL=tag-animations.js.map