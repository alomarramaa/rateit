import { NgForm } from '@angular/forms';
import { Account } from './../models/account.model';
import { Component, Injectable, OnInit } from '@angular/core';
import { AccountRetrieveController } from '../controllers/account.retrieve.controller';

@Component({
  selector: 'loginAccount',
  templateUrl: 'loginAccount.component.html',
  styleUrls: ['loginAccount.component.css'],
})
@Injectable({ providedIn: 'root' })
export class LoginAccountComponent implements OnInit {
  accounts: Account[] = [];

  // Takes an intance of AccountRetriveController
  // Initiallized accounts list
  constructor(private arc: AccountRetrieveController) {
    this.accounts = this.arc.getAccounts();
  }

  ngOnInit(): void {
    console.log('helllo');
    console.log(this.accounts);
  }

  /**
   * Returns a route that either holds user at
   * login page or redirects to homepage
   *
   * @param account - The raw data from login form
   * @returns A string literal of route
   */
  loginRoute(account: NgForm): string {
    let accountEmail: string = account.value.email;
    let accountPassword: string = account.value.password;

    // exit early conditon; determines if account in Firebase
    if (!this.arc.userExists(accountEmail)) {
      console.log('false initial');
      return "";
    }

    let retrievedPassword = "";
    for (var acc of this.accounts) {
      // attempts to retrieve associated password
      if (acc.password == accountPassword) {
        retrievedPassword = acc.password;
      }
    }

    // attempts to verify if entered and retrieved passwords match
    if (accountPassword == retrievedPassword) {
      console.log('true');
      return "home";
    }
    console.log("false")
    return "";
  }
}
