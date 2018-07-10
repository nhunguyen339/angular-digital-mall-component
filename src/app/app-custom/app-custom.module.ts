import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe
  ],
  declarations: [SearchPipe]
})
export class AppCustomModule { }
 