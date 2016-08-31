var accounts = [];

function createAccount (account) {
    accounts.push(account);
    return account;
}

function getAccount (username) {
    var matchedAccount;

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username) {
            matchedAccount = accounts[i];
        }
    }

    return matchedAccount;
}

function deposit (account, amount) {
    if (typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('Deposit failed. Amount is not a number.');
    }
}

function withdraw (account, amount) {
    if (typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log('Withdraw failed. Amount is not a number.');
    }
}

function getBalance (account) {
    return account.balance;
}

function createBalanceGetter (account) {
    return function () {
        return account.balance;
    };
}


var david = createAccount({
    username: 'david',
    balance:0
});

var rosa = createAccount({
    username: 'rosa',
    balance:1000
});

var alex = createAccount({
    username: 'alex',
    balance:60
});

deposit(david, 2500 );
withdraw(rosa, 300 );
//deposit(alex, 'gormiti');
withdraw(alex, 19.99 );


var david2 = getAccount('david');
var getDavid2Balance = createBalanceGetter(david2);

console.log(getDavid2Balance());
