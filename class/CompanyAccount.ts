import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    super(name, accountNumber, balance, status);
  }

  getLoan = (amount: number) => {
    if (!this.validateStatus()) {
      return;
    }

    if (amount <= 0) {
      console.log("Valor inválido para empréstimo.");
      return;
    }
    this.changeBalance(amount);
    console.log(`Você pegou um empréstimo no valor de: R$${amount}`);

    this.getBalance();
  };
}
