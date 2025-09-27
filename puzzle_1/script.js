
/*
Javascript puzzles, real world projects - applying theory
Puzzle #1 - alternate small and capital letters
First letter is always caps - all the even indices in the string (starting from 0) are 
going to be caps
String - StRiNg
Run through the string - change the characters with even indices to caps - toUpperCase - ones with odd indices - change it to small using toLowerCase

*/




function alternateCaps(string){
    //split the string into an array
    let arr = string.split(' ');
    //for every word there will be a new array item - start a new counter
    for( let i=0; i<arr.length; i++){
        //convert every word into an array again
        let sub = arr[i].split('');
        //nested for loops

        for(let j=0; j<sub.length; j++){
            if(j%2 == 0){ //even
                sub[j] = sub[j].toUpperCase();
            }else { //odd
                sub[j] = sub[j].toLowerCase();
            }
}

arr[i] = sub.join('');

}
return arr.join('');

}


let h1 = document.getElementById("h1");
h1.innerHTML = alternateCaps("This is an example of a string");