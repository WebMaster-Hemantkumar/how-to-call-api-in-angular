import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(args){
let array =[];
for(let i=0;i<args;i++){
  array.push(value[i]);
}
return array;
    }
    else{
      return value;
    }
  }

}
