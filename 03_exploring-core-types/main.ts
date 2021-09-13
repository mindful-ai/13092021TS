
function add(n1: number, n2: number, message: string, verbosity: boolean){
    var res: number = n1 + n2;
    if(verbosity == true){
        return message + res;
    }else {
        return res;
    }
};

console.log(add(20, 20, "The final result is: ", true))