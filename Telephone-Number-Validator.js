function telephoneCheck(str) {
  const str1 = "555-555-5555";
  const str2 = "(555)555-5555";
  const str3 = "(555) 555-5555";
  const str4 = "555 555 5555";
  const str5 = "5555555555";

  const str10 = "5 555-555-5555";
  const str6 = "5 555 555 5555";
  const str7 = "5(555)555-5555";
  const str8 = "5 (555) 555-5555";
  const str9 = "5 555 555 5555";

  let pattern = /[0-9]/g;
  let result = str.replace(pattern,5);

  if (result.slice(0,2) === "5(" || result.slice(0,3) === "5 (")
  {
    if (str[0] === "1") {
      return true
    } else {return false}
  }
  if (result === str1 || result === str2 || result === str3 ||result === str4 || result === str5 ||result === str6 ||result === str7 ||result === str8 ||result === str9 || result === str10) {
    return true ;
  } else return false;
  
}


telephoneCheck("2 (757) 622-7382")