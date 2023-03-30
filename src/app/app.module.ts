import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CdkMenuModule } from '@angular/cdk/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MoviesComponent } from './movies/movies.component';
import { MoviesEffects } from './movies.effects';
import { movieReducer } from './movies.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CdkMenuModule,
    ScrollingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({count: counterReducer, movies: movieReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([MoviesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
