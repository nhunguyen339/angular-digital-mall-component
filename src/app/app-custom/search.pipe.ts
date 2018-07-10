import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform (value, queryString) {
    if (value==null) {
      return null;
    }
    if (value=="") {
      return null;
    }

    if(queryString !== undefined){
        return   value.filter(item=>item.model.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }else{
        return value;
    }
  }

}
