// palindrome number
let n = prompt("please enter a number");
let reverse = n.split('').reverse().join('');
if (reverse===n){
    alert("palindrome number");
}
else{
    alert("not a palindrome number");
}