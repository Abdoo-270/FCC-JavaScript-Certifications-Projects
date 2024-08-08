function rot13(str) {
  let newStr = ""
  let x = ""
  const alfabe = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const rotAlfabe = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"]

  for (let i = 0 ; i < str.length ; i++) {
    const char = str[i]
    let index = rotAlfabe.indexOf(char)
    let strChar = rotAlfabe[index]
    x = str.replace(strChar,alfabe [index])[str.indexOf(char)]
    newStr += x
    }
      return newStr;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")