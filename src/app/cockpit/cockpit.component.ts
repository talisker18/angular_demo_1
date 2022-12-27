import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  //make an event listenable from outside by using @Output
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //see app.component.ts, the params have to match
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //see app.component.ts, the params have to match
  //newServerName = ''; //not needed anymore because here we use local reference instead of using 2-way-bind, see cockpit.component.html
  //newServerContent = ''; //just declare var if using 2-way-bind ( [(ngModel)]="newServerContent" ) in cockpit.component.html
  @ViewChild('serverContentInput') serverContentInputVar: ElementRef; //param = local reference #serverContentInput. But you could also pass a object of a TS class, like CockpitComponent

  /*
  further info about ViewChild:

  In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

Instead of:

    @ViewChild('serverContentInput') serverContentInput: ElementRef;

use

    @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.
  
  */



  onAddServer(nameInput: HTMLInputElement) {
    //emit a new event of this type. as param, create new javascript object with key = serverName and value = nameInput.value. same with serverContent
    this.serverCreated.emit({
      serverName: nameInput.value, //using local reference via param of method
      serverContent: this.serverContentInputVar.nativeElement.value //this.serverContentInputVar.nativeElement gets the underlying element, in this case <input>
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInputVar.nativeElement.value
    });
  }
}
