function checkPalindrome(str) {
    let reserve = "";
    for(let i = str.length-1; i>0; i--){
        reverse += str.charAt(i);

        console.log(reverse);
    }if( reverse === str){
        return true;
    }return false;
}

console.log(checkPalindrome("aabaa"));