import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstilosHermanos]'
})
export class EstilosHermanosDirective {

  constructor(private e: ElementRef) { 
    this.e.nativeElement.style.textTransform = 'capitalize';
    this.e.nativeElement.style.color = '#E13D3D';
    
    this.e.nativeElement.style.display = 'flex';
    this.e.nativeElement.style.alignItems = 'center';
    this.e.nativeElement.style.justifyContent = 'center';
    
  }

}
