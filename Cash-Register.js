function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let amount = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
  let currencyUnit = ["ONE -HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]
  let changeList = [];
  let availableCash =[]
  let currencyUnitChange =[]

  // to find the available cash list in the disk
  for (let i = 0 ; i < cid.length ; i++) {
    for (let j = 0; j < cid[i].length ; j++) {
    availableCash.push(cid[i][1])
    break;
    }
  }

  availableCash = availableCash.reverse()
  let sumOfavailableCash = 0 ;

  let x = []; // to find the number of every currency like we have 2 of 100$ , 3 of 10$ , 100 of 1$ ...etc. so we take the result of dividing "availableCash[i]/amount[i]"
  for (let i = 0; i < availableCash.length ; i++) {
    x.push(availableCash[i]/amount[i],)
  } 

  // find the sum of the available cash 
  for (let i = 0; i<availableCash.length ; i++) {
    sumOfavailableCash += availableCash[i]
  }

  // Time to Check --> first case
  if(sumOfavailableCash < change) {
    const checkStatus = {
      status : "INSUFFICIENT_FUNDS",
      change  : []
   };
   return checkStatus
  }

//  SECOND CASE
if (sumOfavailableCash > change) {
  
  for (let i = 0 ; i < x.length ; i++) {
    for (let j = x[i] ; j > 0 ; j--) {
      if (change >= amount[i]) {
        change = Math.round(change * 100) / 100 - amount[i]
        changeList.push(amount[i])
        currencyUnitChange.push(currencyUnit[i])
          }
        } 
    }
    // to remove the same names in currencyUnitChange 
  var prev;
  var unitResult = currencyUnitChange.reduce(function(arr, v) {
  // if element is same as previous then add 
  // value with last element
  if (prev == v)
    arr[arr.length - 1] = v;
  // else push and update prev variable
  else
    arr.push(prev = v)
    // return the array refernece
  return arr;
  // set initial value as empty array for result
}, [])


  // to sum the same numbers in changeList array 
  var prev;
  var changeResult = changeList.reduce(function(arr, v) {
  // if element is same as previous then add 
  // value with last element
  if (prev == v)
    arr[arr.length - 1] += v;
  // else push and update prev variable
  else
    arr.push(prev = v)
    // return the array refernece
  return arr;
  // set initial value as empty array for result
}, [])

// sum of changeList 
  let sumOfChangeList = 0;
  for (let i = 0; i<changeList.length;i++) {
    sumOfChangeList+=changeList[i]
  }

  if (sumOfChangeList < change) {
     const checkStatus = {
      status : "INSUFFICIENT_FUNDS",
      change  : []
   };
   return checkStatus
  }
  else {
  // create the list of ["unit",change]
  let unitItem = []
  let listOfUnits = []
  for (let i = 0 ; i < changeResult.length ; i++) {
    unitItem.push(unitResult[i],changeResult[i])
    listOfUnits.push(unitItem)
    unitItem = []
  }

  // create the object 
  const checkStatus = {
      status : "OPEN",
      change  : listOfUnits
   };
   return checkStatus 
}}

  // THIRD CASE
  
  if (sumOfavailableCash === change) {
    for (let i = 0 ; i < x.length ; i++) {
    for (let j = x[i] ; j > 0 ; j--) {
      if (change >= amount[i]) {
        change = Math.round(change * 100) / 100 - amount[i]
        changeList.push(amount[i])
        currencyUnitChange.push(currencyUnit[i])
          }
        } 
    }
    // to remove the same names in currencyUnitChange 
  var prev;
  var unitResult = currencyUnitChange.reduce(function(arr, v) {
  // if element is same as previous then add 
  // value with last element
  if (prev == v)
    arr[arr.length - 1] = v;
  // else push and update prev variable
  else
    arr.push(prev = v)
    // return the array refernece
  return arr;
  // set initial value as empty array for result
}, [])


  // to sum the same numbers in changeList array 
  var prev;
  var changeResult = changeList.reduce(function(arr, v) {
  // if element is same as previous then add 
  // value with last element
  if (prev == v)
    arr[arr.length - 1] += v ;
  // else push and update prev variable
  else
    arr.push(prev = v)
    // return the array refernece
  return arr;
  // set initial value as empty array for result
}, [])

  // create the list of ["unit",change]
  let unitItem = []
  let listOfUnits = []
  for (let i = 0 ; i < changeResult.length ; i++) {
    unitItem.push(unitResult[i],Math.round(changeResult[i] * 100) / 100)
    listOfUnits.push(unitItem)
    unitItem = []
  }

let model = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]
model.splice(0,1)
listOfUnits.reverse
  // create the object 
  const checkStatus = {
      status : "CLOSED",
      change  : listOfUnits.concat(model)
   };
   return checkStatus
  }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])