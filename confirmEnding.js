
/*

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  str = str.replaceAll(' ', '')
  let start = str.length - target.length
  let st = ''
  for(let i = start; i<str.length; i++){
  st+=(str[i])
  } 
  if(st === target){
   return true
  } return false
  }


