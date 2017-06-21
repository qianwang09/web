import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { CarService } from './cars/carservice';
import { MyReviewComponent } from './myreview.component';
import { ConfidentialMatchService } from './confidentials/confidentialmatchservice';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [
    MyReviewComponent
  ],
  bootstrap: [  MyReviewComponent ],
  providers: [  ConfidentialMatchService]
})
export class AppModule { }
