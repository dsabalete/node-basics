var accounts = [];

// Account Object
var account = {
    balance: 0,
    username: ''
};

// createAccount(account)
// push onto accounts array
// return account
function createAccount (account) {
    accounts.push(account);
    return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount (username) {
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.username === username) {
            matchedAccount = account;
        }
    });

    return matchedAccount;
}

// deposit(account, amount)
function deposit (account, amount) {
    account.balance += amount;
}

// withdraw(account, amount)
function withdraw (account, amount) {
    account.balance -= amount;
}

// getBalance(account)
function getBalance (account) {
    return account.balance;
}

var davidAccount = createAccount({
    username: 'david',
    balance:0
});

var rosaAccount = createAccount({
    username: 'rosa',
    balance:1000
});

var alexAccount = createAccount({
    username: 'alex',
    balance:40
});

deposit(davidAccount, 2500 );
withdraw(rosaAccount, 300 );
withdraw(alexAccount, 20 );

console.log( 'David\'s balance: ' + getBalance(davidAccount) );
console.log( 'Rosa\'s balance: ' + getBalance(rosaAccount) );
console.log( 'Alex\'s balance: ' + getBalance(alexAccount) );

var existingAccount = getAccount('david');
console.log(getBalance(existingAccount));

var jensAccount = createAccount({username: 'jen001', balance: 12});

console.log(accounts);

var existingJensAccount = getAccount('jen001');
console.log(existingJensAccount);


