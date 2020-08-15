import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//
import { LoginComponent } from './login/login.component';

//
import { RegisterComponent } from './register/register.component';

import { UsersComponent } from './users/users.component';
import { CreateOrEditUserComponent } from './users/createoredit.user.component';
import { UserService } from './users/user.service';

import { ForgotPasswordComponent } from './forgot-password/forgot.password.component';

// services
import { WidgetCalloutPanelComponent } from './shared/widgets/callout.panel/widget.callout.panel.component';
import { WidgetCalloutPanelService } from './shared/widgets/callout.panel/widget.callout.panel.service';

import { WidgetLoaderComponent } from './shared/widgets/loader/widget.loader.component';
import { WidgetLoaderService } from './shared/widgets/loader/widget.loader.service';

import { WidgetPageLoaderComponent } from './shared/widgets/loader/widget.page.loader.component';
import { WidgetPageLoaderService } from './shared/widgets/loader/widget.page.loader.service';

import { WidgetLoginComponent } from './shared/widgets/login/widget.login.component';

import { WidgetRegisterComponent } from './shared/widgets/register/widget.register.component';

import { WidgetForgotPasswordComponent } from './shared/widgets/forgot.password/widget.forgot.password.component';

import { WidgetConfirmDialogComponent } from './shared/widgets/confirm.dialog/widget.confirm.dialog.component';
import { WidgetConfirmDialogService } from './shared/widgets/confirm.dialog/widget.confirm.dialog.service';

import { WidgetAlertDialogComponent } from './shared/widgets/alert.dialog/widget.alert.dialog.component';
import { WidgetAlertDialogService } from './shared/widgets/alert.dialog/widget.alert.dialog.service';

import { WidgetToastComponent } from './shared/widgets/toast/widget.toast.component';
import { WidgetToastService } from './shared/widgets/toast/widget.toast.service';

import { WidgetPaginationComponent } from './shared/widgets/pagination/widget.pagination.component';

// services

import { AuthService } from './shared/services/auth.service';
import { GlobalService } from './shared/services/global.service';
import { RandomNumberService } from './shared/services/random.service';

// pipes

import { CurrencyPipe } from './shared/pipes/currency.pipe';

// helpers

import { DateTimeHelper } from './shared/helpers/datetime.helper';
import { WidgetAuthKnobComponent } from './shared/widgets/auth.knob/widget.auth.knob.component';
import { StateManagementService } from './shared/services/state.management.service';
import { InterceptorService } from './shared/services/interceptor.service';
import { BoardComponent } from './users/board.component';

@NgModule({
  declarations: [

    // pipes
    CurrencyPipe,


    // components
    AppComponent,
    HomeComponent,

    UsersComponent,
    CreateOrEditUserComponent,
    BoardComponent,

    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,

    PageNotFoundComponent,

    // widgets
    WidgetLoaderComponent,
    WidgetPageLoaderComponent,
    WidgetLoginComponent,
    WidgetRegisterComponent,
    WidgetForgotPasswordComponent,
    WidgetConfirmDialogComponent,
    WidgetAlertDialogComponent,
    WidgetToastComponent,
    WidgetPaginationComponent,
    WidgetCalloutPanelComponent,
    WidgetAuthKnobComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },

    // shared widget services
    WidgetPageLoaderService,
    WidgetConfirmDialogService,
    WidgetAlertDialogService,
    WidgetToastService,
    WidgetLoaderService,
    WidgetCalloutPanelService,

    // component services
    UserService,

    // shared services
    AuthService,
    StateManagementService,
    InterceptorService,
    GlobalService,
    RandomNumberService,

    // helper
    DateTimeHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
