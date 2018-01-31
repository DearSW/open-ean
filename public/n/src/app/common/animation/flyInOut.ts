
// @导入动画需要的方法
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

export const flyInOut =  trigger('flyInOut', [

    // @状态
    state('in', style({transform: 'translateX(0)'})),

    // @进场
    transition('void => *', [
        animate(700, keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(15px)',  offset: 0.5}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
    ]),

    // @出场
    transition('* => void', [
        animate(700, keyframes([
            style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
            style({opacity: 0.5, transform: 'translateX(-15px)', offset: 0.5}),
            style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
    ])

])
