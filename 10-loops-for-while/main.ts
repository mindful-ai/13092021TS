var input = document.getElementById("in")! as HTMLInputElement;
var btn = document.getElementById("calc")! as HTMLElement;

btn.onclick = function(): void{
    var n:number = +input.value;
    var res:number = 1;
    var i: number = 1;
    /*
    for(i = 1; i <= n; i++){
        res *= i;
    }
    */

    while(i <= n){
        res *= i;
        i++;
    }
    
    console.log("Factorial :", res);
}