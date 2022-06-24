function palindrome(str) {
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = polishedString.split("").reverse().join("");
  return polishedString === reversedString ? true : false;
}
palindrome("eye");
