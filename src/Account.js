class Account{

  constructor(props){
    this.statement = [];
    this.dob = props.dob;
    this.name = props.name;
    this.activeStatus = true;
    this.bankName = `Janakari Bank Ltd.`;
    
    this.balance = 100;
    this.depositLimit = 500000;
    this.minBalanceRequired = 100;
    this.transactionLimit = 500000;
    
  }


  /**
   * Returns a organized bank statement.
   */
  viewStatement(){
    let fullStatement = ` Account Holder : ${this.name} \n Date of Birth: ${this.dob}\n Current Balance: ${this.balance}\n\n`;

    for(let el of this.statement){
      fullStatement += `Title: ${el.title}\nDescription: ${el.desc}\nTime: ${el.time}\nBalance: ${el.newBalance}\n\n`;
    }
    return fullStatement;
  }


  /**
   * Returns whether a deposit was successfull or not
   * @param {number} amount - Amount to be deposited
   * @return {Boolean} Deposit success status
   */
  deposit(amount){

    if(amount > this.depositLimit){
      // beyond transactional limit
      alert('Amount is beyond the deposit limit.');
      return false;
    }

    this.balance += amount ;
    
    // deposit successfull, generating transaction invoice
    const timing = new Date();
    const transaction = {
      title: "Deposited",
      desc: `An amount of ${amount} was deposited.`,
      time: timing,
      newBalance: this.balance
    }
    this.statement.push(transaction);

    return true;
  }


  /**
   * Returns whether a withdrawl was successfull or not
   * @param {number} amount - Amount to be deducted
   * @return {Boolean} Deductiom success status
   */
  deduct(amount){
    const remBalance = this.balance-amount;

    if((this.minBalanceRequired > remBalance) || (amount > this.transactionLimit)){
      // deduction isn't possible
      alert('You don\'t have sufficient balance to do so.');
      return false;
    }

    this.balance -= amount ;

    const timing = new Date();
    const transaction = {
      title: "Withdrawal",
      desc: `An amount of ${amount} was withdrawn.`,
      time: timing,
      newBalance: this.balance
    }
    this.statement.push(transaction);

    return true;
  }


  /**
   * @return {number} current balance in account
   */
  displayBalance(){
    return this.balance;
  }


  /**
   * @param {number} amount - Amount to be transferred
   * @param {Object} receiver - The receipent of the transferred amount
   * @return {Boolean} Success status of the transfer
   */
  transferMoney(amount, receiver){
    const phase1 = this.deduct(amount);

    if(!phase1){
      // some error in the sender's side
      return false;
    }

    const phase2 = receiver.deposit(amount);

    if(!phase2){
      //some problem in the receipent's side
      this.balance += amount; //restoring the lost balance of sender
      return false;
    }

    //successfull transfer message
    return true;

  }

}

export {Account};
