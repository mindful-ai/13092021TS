function add(n1, n2, message, verbosity) {
    var res = n1 + n2;
    if (verbosity == true) {
        return message + res;
    }
    else {
        return res;
    }
}
;
console.log(add(20, 20, "The final result is: ", true));
