//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._opened = false;
  }

  open() {
    if (this._opened) throw new ValueError('Account is not opened');
    this._opened = true;
    this._balance = 0;
  }

  close() {
    if (!this._opened) throw new ValueError('Account is not opened');
    this._opened = false;
  }

  deposit(amount) {
    if (!this._opened) throw new ValueError('Account is not opened');
    if (amount < 0) throw new ValueError('Cannot deposit negative balance');
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this._opened) throw new ValueError('Account is not opened');
    if (this._balance < amount) throw new ValueError('Not enough balance');
    if (amount < 0) throw new ValueError('Cannot withdraw negative balance');
    this._balance -= amount;
  }

  get balance() {
    if (!this._opened) throw new ValueError('Account is not opened');
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
