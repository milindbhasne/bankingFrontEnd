
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TokeninterceptorService } from '../app/services/tokeninterceptor.service';
import{HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from "./services/data.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './userdash/userdash.component';
import { OverdraftComponent } from './components/overdraft/overdraft.component';
import { ChequeComponent } from './components/cheque/cheque.component';
import { FundsTransferComponent } from './components/funds-transfer/funds-transfer.component';
import { DthComponent } from './components/dth/dth.component';
import { ElectricityComponent } from './components/electricity/electricity.component';
import { PhoneComponent } from './components/phone/phone.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewservicesComponent } from './viewservices/viewservices.component';
import { AdmindashComponent } from './admindash/admindash.component';//admin
import { ChequeReportComponent } from './admincomponents/cheque-report/cheque-report.component';
import { DepositComponent } from './admincomponents/deposit/deposit.component';
import { LoanRequestComponent } from './admincomponents/loan-request/loan-request.component';
import { LockedAccountsComponent } from './admincomponents/locked-accounts/locked-accounts.component';
import { OpenAccountComponent } from './admincomponents/open-account/open-account.component';
import { WithdrawalComponent } from './admincomponents/withdrawal/withdrawal.component';
import { TransComponent } from './admincomponents/trans/trans.component';
import {CustomerlistComponent} from './customerlist/customerlist.component';
import { ViewchequesComponent } from './components/viewcheques/viewcheques.component';
import { ViewamountComponent } from './components/viewamount/viewamount.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    UserDashComponent,
    OverdraftComponent,
    ChequeComponent,
    FundsTransferComponent,
    DthComponent,
    ElectricityComponent,
    PhoneComponent,
    TransactionsComponent,
    ViewservicesComponent,
    AdmindashComponent,
    ChequeReportComponent,
    DepositComponent,
    LoanRequestComponent,
    LockedAccountsComponent,
    OpenAccountComponent,
    WithdrawalComponent,
    TransComponent,
    CustomerlistComponent,
    TransactionsComponent,
    ViewchequesComponent,
    ViewamountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:"",
      component:HomeComponent
    },
   { path:"register",
    component:RegisterComponent
  },
  { path:"viewservices",
   component:ViewservicesComponent
 },
 { path:"admindash",
 component:AdmindashComponent
},
//USER SERVICES
{
  path:"viewcheque",
  component:ViewchequesComponent
},
{
    path:"cheque",
    component:ChequeComponent
  },
  {
    path:"dth",
    component:ChequeComponent
  },
  {
    path:"electricity",
    component:ChequeComponent
  },  {
    path:"funds-transfer",
    component:ChequeComponent
  },  {
    path:"phone",
    component:ChequeComponent
  },
   {
    path:"transactions",
    component:TransactionsComponent
  },
  {
       path:"details",
       component:ViewamountComponent
  },
//USER SERVICES




//ADMIN SERVICES
{
  path:"trans",
  component:TransComponent
},
{
  path:"list",
  component:CustomerlistComponent
},
{
  path:"chequereport",
  component:ChequeReportComponent
},
{
  path:"loanrequest",
  component:LoanRequestComponent
},
{
  path:"lockedaccounts",
  component:LockedAccountsComponent
},
{
  path:"openaccount",
  component:OpenAccountComponent
},
//ADMIN SERVICES

  {
    path:"login",
    component:LoginComponent
  },
  {
  path:"userdash",
  component:UserDashComponent
  },
  {
  path:"overdraft",
  component:OverdraftComponent
  },
  {
  path:"service",
  component:RegisterComponent
  },
  ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokeninterceptorService,
    multi: true,
    },DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
