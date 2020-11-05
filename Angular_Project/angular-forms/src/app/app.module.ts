import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TdFormComponent } from './td-form/td-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdFormComponent } from './md-form/md-form.component';
import { FakeComponent } from './fakeAPI/fake.component';
import { FakeService2 } from './fake.service2';
import { HttpClientModule } from "@angular/common/http";
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    TdFormComponent,
    MdFormComponent,
    FakeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FakeService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
