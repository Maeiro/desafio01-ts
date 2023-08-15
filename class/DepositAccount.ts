import { DioAccount } from "./DioAccount";

export class DepositAccount extends DioAccount {
  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    super(name, accountNumber, balance, status);
  }

  deposit = (amount: number) => {
    if (!this.validateStatus()) {
      return;
    }

    if (amount <= 0) {
      console.log("Valor inválido para depósito.");
      return;
    }

    this.changeBalance(amount + 10);
    console.log(
      `Depósito realizado com sucesso. Você depositou o valor de: R$${amount} + R$10 de bônus.`
    );
    this.getBalance();
  };
}
