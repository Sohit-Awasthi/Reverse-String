// Reverse the String Code With DSA

let str="HELLO";
let reverse =""
for(let i=str.length-1; i>=0; i--){
    reverse = reverse+str.charAt(i)
}
console.log(reverse)