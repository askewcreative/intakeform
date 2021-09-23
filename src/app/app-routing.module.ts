import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormViewComponent } from './form-view/form-view.component';

const routes: Routes = [
{path: 'form-creator' , component:FormCreatorComponent},
{path: 'form-editor' , component:FormEditorComponent},
{path: 'form-view' , component:FormViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
