import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeaderComponent, CardComponent]
})
export class SharedModule {}
