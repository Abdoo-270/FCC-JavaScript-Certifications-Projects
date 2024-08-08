function palindrome(str) {
  let newStr = str
                  .replaceAll("_","")
                  .toLowerCase()
                  .match(/\w/g);
                  
  let arr1 = [];
  let arr2 = [];
  for (let i = 0 ; i < str.length ; i++) {
    arr1.push(newStr[i])
  }
  for (let j = arr1.length-1 ; j >= 0 ; j--) {
    arr2.push(arr1[j])
  }


  let str1 = arr1.join("");
  let str2 = arr2.join("");
  if (str1 === str2) {
    return true;
  }  else { return false}
}

palindrome("eyedsfd");
