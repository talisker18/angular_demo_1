import { Component, Input, ViewEncapsulation, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation: ViewEncapsulation.None //remove the attributes (unique selectors!!!) added by angular, like '_ngcontent-hih-c45'. These attributes are used for ViewEncapsulation in angular
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { //expose this property to the outside so other components can access it. Outside, it can be accessed by 'srvElement', see app.component.html
    type: string,
    name: string,
    content: string
  };

  //with angular 8, we have to use static: true because we use these elements in ngOnInit
  @ViewChild('heading', {static: true}) header: ElementRef;
  //@ContentChild('contentParagraph', {static: true}) para: ElementRef; // --> for @ContentChild (content projection using @ContentChild and ng-content elements), see on github: angular_demo_contentprojection

  constructor(){
    console.log('constructor called');
  }

  //angular lifecycle hooks. See browser console log when the methods are called

  ngOnInit(){
    console.log('ngOnInit called');
    console.log('getting text of header var: ' + this.header.nativeElement.textContent); //at this place, the header var is not init yet
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck(): void { //void not necessary
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('getting text of header var: '+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }


}
