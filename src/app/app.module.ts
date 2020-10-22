import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { IndexComponent } from './components/index/index.component';
import { LayoutModule } from './layout/layout.module';
import { PersonasFormComponent } from './components/personas/personas-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    IndexComponent,
    PersonasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
