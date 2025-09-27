function expandedForm(num){
    num = Number.toString().split('').reverse().join('');
    let arr = [];
    let string = "";
    for(let i=0; i<num.lenght;i++){
        let temp = parseInt(num.charAt(i)) * Math.pow(10,i);
        if(temp != 0){ {
            arr.push(temp);
        }
    }
    for(let i = arr.lenght - 1; i>=0; i--) {
       if(j==0){

       }
       string = string.concat(arr[i], "", "+","");
    }
}
}

console.log(expandedForm(7653442));