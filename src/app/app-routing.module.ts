import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ErrorHandlingComponentComponent } from './error-handling-component/error-handling-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ModedrivenComponent } from './modedriven/modedriven.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { ParentComponent } from './parent/parent.component';
import { TDFComponent } from './tdf/tdf.component';

const routes: Routes = [
  { path: "", component: HomeComponentComponent },
  { path: "error_Handling", component: ErrorHandlingComponentComponent },
  { path: "attrdirectives", component: AttributeDirectivesComponent },
  { path: "parent", component: ParentComponent },
  { path: "pipes", component: MypipesComponent },
  { path: "TDF", component: TDFComponent },
  { path: "RF", component: ModedrivenComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
