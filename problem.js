
// Toggle Problem :-
// togle means if user send the string and check the string we strings charecter show
// in calital letter then change small later oterwise small later 

let str = "Hey hOW ARE u?!";
let toggleData = "";

for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);

    if (ascii >= 65 && ascii <= 90) {
        let res = String.fromCharCode(ascii + 32);
        toggleData += res;
    } else if (ascii >= 97 && ascii <= 122) {
        let res = String.fromCharCode(ascii - 32);
        toggleData += res;
    } 
    else{
        toggleData+=str[i]
    }
}

console.log("Original String:", str);
console.log("Toggled String :", toggleData);
