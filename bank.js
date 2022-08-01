
class Bank {
    static getAccountDetails() {
        var accountDetails = {
            1001: { name: "Maria Anders", acno: 1001, pin: 1234, password: "1aA!1aA!", balance: 3000 },
            1002: { name: "Ana Trujillo", acno: 1002, pin: 2345, password: "2bB@2bB@", balance: 2500 },
            1003: { name: "Antonio Moreno", acno: 1003, pin: 3456, password: "3cC#3cC#", balance: 5000 },
            1004: { name: "Thomas Hardy", acno: 1004, pin: 4567, password: "4dD$4dD$", balance: 8900 },
            1005: { name: "Christina Berglund", acno: 1005, pin: 5678, password: "5eE%5eE%", balance: 10000 },
        }
        return accountDetails
    }
    static login() {
        var acno = document.getElementById('acno').value;
        var password = document.getElementById('pwd').value;
        try {
            if (isNaN(acno)) throw "Not a valid account Number";
        }
        catch (err) {
            alert(err);
        }

        let data = Bank.getAccountDetails();
        if (acno in data) {
            let pwd = data[acno].password;
            if (pwd == password) {
                alert("Logged In Successfully!");
                window.location.href = "user/home.html";
            }
            else {
                alert("Incorrect Username or Password!");
            }
        }
        else {
            alert("User does not exist!");
        }

    }
    static deposit() {
        var accnum = document.getElementById('acno').value;
        var pinnum = document.getElementById('pin').value;
        var amount = Number(document.querySelector("#amt").value);
        var data = Bank.getAccountDetails();
        if (accnum in data) {
            let mpin = data[accnum].pin;
            if (pinnum == mpin) {
                data[accnum].balance += amount;
                alert("Amount has been deposited!\nYour current balance is ₹" + data[accnum].balance + ".");
                window.location.href = "home.html";
            }
            else
                alert("Incorrect PIN!");
        }

    }
    static withdraw() {
        var wacno = document.getElementById('wacno').value;
        var wpin = document.getElementById('pin').value;
        var wamt = Number(document.getElementById('wamt').value);
        var data = Bank.getAccountDetails();
        if (wacno in data) {
            var mpin = data[wacno].pin
            if (wpin == mpin) {
                data[wacno].balance -= wamt;
                alert("Amount has been withdrawn!\nYour current balance is ₹" + data[wacno].balance + ".");
                window.location.href = "home.html";
            }
            else
                alert("Incorrect PIN!");
        }
    }
    static ddeposit() {
        var x = document.getElementById('acno').value;
        var data = Bank.getAccountDetails();
        if (x in data) {
            let dname = data[x].name;
            let dbal = data[x].balance;
            document.getElementById('dname').innerHTML = "Hello, " + dname + "!";
            document.getElementById('dbal').innerHTML = "Your current balance is ₹" + dbal + ".";
        }
    }
    static dwithdraw() {
        var x = document.getElementById('wacno').value;
        var data = Bank.getAccountDetails();
        if (x in data) {
            let dname = data[x].name;
            let dbal = data[x].balance;
            document.getElementById('dname').innerHTML = "Hello, " + dname + "!";
            document.getElementById('dbal').innerHTML = "Your current balance is ₹" + dbal + ".";
        }
    }
}