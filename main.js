// Write your JavaScript here

function handleClickEvent() {
    var amountDue = parseFloat(document.getElementById("amount-due").value); // this variable is from HTML markup//
    var amountReceived = parseFloat(document.getElementById("amount-received").value); // same here //

    // Let's convert them to the pennies!
    amountDue *= 100;
    amountReceived *= 100;

    var change = amountReceived - amountDue; //converting amounts to pennies and does the calculation to give you amount in pennies//

    var coinValues = {
        dollars: 100,
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1
    } // the above is quantifying how many pennies are in each value amount of money//

    var dollars = Math.floor(change / coinValues.dollars);
    //change = change % coinValues.dollar;
    change = change - dollars * coinValues.dollars;

    var quarters = Math.floor(change / coinValues.quarters);
    // change = change % coinValues.quarters;
    change = change - quarters * coinValues.quarters;

    var dimes = Math.floor(change / coinValues.dimes);
    // change = change % coinValues.dimes;
    change = change - dimes * coinValues.dimes;

    var nickels = Math.floor(change / coinValues.nickels);
    // change = change % Math.floor(change / coinValues.nickels);
    change = change - nickels * coinValues.nickels;

    var pennies = Math.round(change);

    /* the above breaks out the object list {} included with the variable called "coinValues".
     For example: When it runs coinValues var it will iterate down the list and find out how many dollars,
     quarters, dimes, nickels and pennies are contained in the value. The "Math.floor ()" function before the parameters 
     means to return the largest integer less than or equal to the given. So, it will say "take the "change" variable 
     after Math.floor and divide it by coinValues and the period means to iterate down the coinvalues list to find the value 
     of dollars (which is 100 pennies)"" */

    document.getElementById("dollars-output").innerText = dollars;
    document.getElementById("quarters-output").innerHTML = quarters;
    document.getElementById("dimes-output").innerHTML = dimes;
    document.getElementById("nickels-output").innerHTML = nickels;
    document.getElementById("pennies-output").innerHTML = pennies;
}

document.getElementById("calculate-change").addEventListener("click", handleClickEvent);
