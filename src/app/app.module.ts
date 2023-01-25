import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlingComponentComponent } from './error-handling-component/error-handling-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDirectiveDirective } from './my-directive.directive';
import { MypipesComponent } from './mypipes/mypipes.component';
import { MypipePipe } from './mypipe.pipe';
import { TDFComponent } from './tdf/tdf.component';
import { ModedrivenComponent } from './modedriven/modedriven.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorHandlingComponentComponent,
    HomeComponentComponent,
    AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent,
    MyDirectiveDirective,
    MypipesComponent,
    MypipePipe,
    TDFComponent,
    ModedrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
