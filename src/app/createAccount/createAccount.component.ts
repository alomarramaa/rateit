
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountAlterController } from '../controllers/account.alter.controller';
import { AccountRetrieveController } from '../controllers/account.retrieve.controller';
import { Account } from '../models/account.model';

@Component({
  selector: 'create-account-component',
  templateUrl: 'createAccount.component.html',
  styleUrls: ['createAccount.component.css'],
})
export class CreateAccount implements OnInit {

  constructor(private aac: AccountAlterController,private arc: AccountRetrieveController) {}

  ngOnInit(): void {
      console.log("hello 1");
  }

  createAccount(account: NgForm): void {
    if (this.arc.userExists(account.value.email)) {
      return;
    }
    this.aac.pushAccountInfo(new Account("", account.value.username, account.value.email, account.value.password, [], []));
  }
}
