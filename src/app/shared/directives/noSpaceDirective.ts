import { Directive,HostListener } from "@angular/core";


@Directive({
    selector : '[noSpaceAllow]'
})

export class NoSpaceDirective{
   constructor(){}
   @HostListener('input', ['$event']) onEventInputHandler(eve : Event){
        let ele = eve.target as HTMLInputElement;
        let input = ele.value.replace(/\s+/g, '')
        ele.value = input
   }
}