import { Directive, ElementRef, Renderer, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUpperDirective]'
})
export class UpperDirectiveDirective {
  constructor(private e: ElementRef, 
              private render: Renderer, 
              //private template: TemplateRef<any>, 
              //private viewContainer: ViewContainerRef
              ){
              render.setElementStyle(e.nativeElement,"text-transform", "uppercase");
              }
}
