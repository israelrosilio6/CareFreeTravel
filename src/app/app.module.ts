import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {Http, HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {GestureConfig} from '@angular/material';

import {rootRouterConfig} from './app.routing';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';

import {
  MatAutocompleteModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Knapsack} from './services/knapsack';
import {TripsService} from './trips/trips.service';
import {UsersAuthService} from './services/users.auth.service';
import {AuthGuard} from './shared/services/auth/auth.guard';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTooltipModule,
    SharedModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(rootRouterConfig, {useHash: false})
  ],
  declarations: [AppComponent],
  providers: [
     UsersAuthService,
     TripsService,
     Knapsack,
     AuthGuard,
    // ANGULAR MATERIAL SLIDER FIX
    {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
