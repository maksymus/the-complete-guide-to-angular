import { Component } from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)',
      })),
      transition('normal <=> highlighted', animate(300)),
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)',
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0px) scale(0.5)',
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(200)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange',
        }),
        animate(1000, style({
          borderRadius: '50px',
        })),
        animate(500),
      ]),
    ]),
    trigger('list1', [
      transition('void => *', [ // initial style
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({          // end style
            opacity: 0,
            transform: 'translateX(100px)'
          }),
        )
      ]),
    ]),
    trigger('list2', [
      transition('void => *', [
        animate(1000, keyframes([
          style({
            opacity: 0,
            transform: 'translateX(-100px)',
            offset: 0
          }),
          style({
            opacity: 0.5,
            transform: 'translateX(-50px)',
            offset: 0.3
          }),
          style({
            opacity: 1,
            transform: 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(200, style({          // end style
              color: 'red'
            }),
          ),
          animate(800, style({          // end style
              opacity: 0,
              transform: 'translateX(100px)'
            }),
          )
        ]),
      ]),
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState == 'normal' ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  animationStarted(event: Event) {
    console.log('Animation started: ', event);
  }

  animationEnded(event: Event) {
    console.log('Animation ended: ', event);
  }

  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
