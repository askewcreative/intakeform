import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormEditorComponent } from './form-editor/form-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCreatorComponent,
    FormViewComponent,
    FormEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
