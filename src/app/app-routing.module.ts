import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashComponent } from './userdash/userdash.component';//user
import { OverdraftComponent } from './components/overdraft/overdraft.component';
import { ChequeComponent } from './components/cheque/cheque.component';
import { FundsTransferComponent } from './components/funds-transfer/funds-transfer.component';
import { DthComponent } from './components/dth/dth.component';
import { ElectricityComponent } from './components/electricity/electricity.component';
import { PhoneComponent } from './components/phone/phone.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewchequesComponent } from './components/viewcheques/viewcheques.component';
import { AdmindashComponent } from './admindash/admindash.component';//admin
import { ChequeReportComponent } from './admincomponents/cheque-report/cheque-report.component';
import { DepositComponent } from './admincomponents/deposit/deposit.component';
import { LoanRequestComponent } from './admincomponents/loan-request/loan-request.component';
import { LockedAccountsComponent } from './admincomponents/locked-accounts/locked-accounts.component';
import { OpenAccountComponent } from './admincomponents/open-account/open-account.component';
import { WithdrawalComponent } from './admincomponents/withdrawal/withdrawal.component';
import { TransComponent } from './admincomponents/trans/trans.component';
import {CustomerlistComponent} from './customerlist/customerlist.component';
import {AuthService} from './services/auth.service'
import { HomeComponent } from './home/home.component';
import { ViewamountComponent } from './components/viewamount/viewamount.component';

const routes: Routes = [

  {path:'dash', component:UserDashComponent, canActivate:[AuthService],
children:[{path:'overdraft',component:OverdraftComponent, canActivate:[AuthService]},
{path:'cheque',component:ChequeComponent, canActivate:[AuthService]},
{path:'funds-transfer',component:FundsTransferComponent, canActivate:[AuthService]},
{path:'dth',component:DthComponent, canActivate:[AuthService]},
{path:'electricity',component:ElectricityComponent, canActivate:[AuthService]},
{path:'phone',component:PhoneComponent, canActivate:[AuthService]},{path:'viewcheque',component:ViewchequesComponent, canActivate:[AuthService]},
{path:'transactions',component:TransactionsComponent, canActivate:[AuthService]},
{path:'details',component:ViewamountComponent, canActivate:[AuthService]}
]},
{path:'admindash',component:AdmindashComponent, canActivate:[AuthService],
children:[{path:'chequereport',component:ChequeReportComponent, canActivate:[AuthService]},
{path:'trans',component:TransComponent, canActivate:[AuthService],
children:[{path:'deposit', component:DepositComponent, canActivate:[AuthService]},{path:'withdrawal',component:WithdrawalComponent, canActivate:[AuthService]}]},
{path:'loanrequest',component:LoanRequestComponent, canActivate:[AuthService]},
{path:'openaccount',component:OpenAccountComponent, canActivate:[AuthService]},
{path:'lockedaccounts',component:LockedAccountsComponent, canActivate:[AuthService]},
{path:'list',component:CustomerlistComponent, canActivate:[AuthService]}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [UserDashComponent,
  OverdraftComponent,
  ChequeComponent,
  DthComponent,
  ElectricityComponent,
  FundsTransferComponent,
  PhoneComponent,
  TransactionsComponent]
