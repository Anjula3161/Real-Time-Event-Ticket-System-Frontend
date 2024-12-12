import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import { AppComponent } from './app.component'; // Root component
// @ts-ignore
import { ConfigurationFormComponent } from './components/configuration-form/configuration-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)]
// @ts-ignore
import { MatFormFieldModule } from '@angular/material/form-field';
// @ts-ignore
import { MatInputModule } from '@angular/material/input';
// @ts-ignore
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationFormComponent, // Declare the components
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for two-way binding with ngModel
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule], // Export for use in other modules
  providers: [],
})
export class AppModule { }
