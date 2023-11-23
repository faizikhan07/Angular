import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  /**
   * -----------------------------------------
   * METHOD 1: TO SET THE BACKGROUND COLOR
   * -----------------------------------------
   */
  constructor(private element: ElementRef) { 
    // setTimeout(() => {
    //   this.element.nativeElement.style.backgroundColor=this.backgroundColor;
    // }, 1000);
  }

  /**
   * ----------------------------------------
   * METHOD 2: TO SET THE BACKGROUND COLOR
   * ----------------------------------------
   */
  @Input('appClass') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}



/**
 * const directive = new ClassDirective();
 * directive.backgroundColor = 'red';
 */















// To Communicate from Parent to Child Component...

/**
 * ----------------------------
 * Parent Component Template
 * ----------------------------
 * <app-card [title]="'SnowyMountain'"></app-card>
 * 
 * ----------------------------
 * Child Component Class
 * ----------------------------
 * import { input } from 'angular';
 * 
 * class ChildComponent {
 *  @Input() title: string;
 * }
 * 
 */
