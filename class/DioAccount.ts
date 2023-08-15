export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number;
  private status: boolean;

  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = status;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (amount: number) => {
    if (!this.validateStatus()) {
      return;
    }

    if (amount <= 0) {
      console.log("Valor inválido para depósito.");
      return;
    }

    this.balance += amount;
    console.log(
      `Depósito realizado com sucesso. Você depositou o valor de: R$${amount}`
    );
    this.getBalance();
  };

  withdraw = (amount: number) => {
    if (!this.validateStatus()) {
      return;
    }

    if (amount <= 0) {
      console.log("Valor inválido para saque.");
      return;
    }

    if (this.balance < amount) {
      console.log("Saldo insuficiente.");
      return;
    }

    this.balance -= amount;
    console.log(
      `Saque realizado com sucesso. Você sacou o valor de: R$${amount}`
    );
    this.getBalance();
  };

  getBalance = (): void => {
    console.log(`Saldo atual da conta: R$${this.balance}`);
  };

  validateStatus = () => {
    if (!this.status) {
      console.log("Conta inválida. A conta está desativada.");
      return false;
    }
    return true;
  };

  changeBalance = (amount: number) => {
    this.balance += amount;
  };
}
