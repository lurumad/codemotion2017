import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpModule } from '@angular/http';
import { API_BASE_URL } from './services/services';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide : API_BASE_URL,
      useValue : "http://localhost:5000"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
