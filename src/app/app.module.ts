import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodayComponent } from './today.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: 'search', component: SearchComponent }]),
  ],
  declarations: [AppComponent, HelloComponent, TodayComponent, SearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
