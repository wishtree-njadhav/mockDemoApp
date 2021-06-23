import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { LibMockComponent } from './lib-mock.component';



@NgModule({
  declarations: [
    LibMockComponent,
    HelloworldComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    LibMockComponent,
    HelloworldComponent
  ]
})
export class LibMockModule { }
