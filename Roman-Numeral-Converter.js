function convertToRoman(num) {
  let romanNum = "";
  const RomanChart = {
    M:1000, CM:900 ,  D:500, CD:400, C:100, XC:90 , L : 50,XL:40, X : 10,IX:9 , V : 5,IV:4, I:1
  }

   const romanList = Object.keys(RomanChart);
   const numberList = Object.values(RomanChart);

   for (let i = 0 ; i < romanList.length ; i++ ) {
     if (num > numberList[i]) {
       num = num - numberList[i];
       romanNum = romanNum + romanList[i]
       i = i - 1;
     } else if (num === numberList[i]){
       num = num - numberList[i];
       romanNum = romanNum + romanList[i]
       break;
     }
   }
   return romanNum
}

convertToRoman(70);
