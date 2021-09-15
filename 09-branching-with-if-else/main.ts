var a = document.getElementById("n1")! as HTMLInputElement;
var b = document.getElementById("n2")! as HTMLInputElement;
var btn = document.getElementById("btn")! as HTMLElement;

btn.onclick = function(){
    let  res: number = +a.value - +b.value;
    if(res > 0){
        console.log("The result is positive");
    } else if(res < 0){
        console.log("The result is negative");
    } else {
        console.log("The result is zero");
    }

};