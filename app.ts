import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { DepositAccount } from "./class/DepositAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  449902717,
  "Victor",
  1,
  1000,
  true
);
peopleAccount.deposit(500);
peopleAccount.withdraw(200);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 1, 500, true);
companyAccount.getLoan(500);

const depositAccount: DepositAccount = new DepositAccount(
  "DepositoPlus",
  1,
  500,
  true
);
depositAccount.deposit(500);
