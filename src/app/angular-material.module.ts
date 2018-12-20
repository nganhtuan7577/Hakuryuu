import {NgModule} from '@angular/core';
import { 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatGridListModule, 
    MatFormFieldModule, 
    MatInputModule 
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule, 
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})

export class AngularMaterialModule {}
