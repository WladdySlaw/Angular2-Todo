import { Component } from '@angular/core';

import { Todo } from './shared/todo';
import { todos } from './shared/data';

let strings: string[] = ['a', 'b', 'c', 'd'];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title:string = 'Angular 2Do';
}