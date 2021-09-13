const opa = document.getElementById("num1")! as HTMLInputElement;
const opb = document.getElementById("num2")! as HTMLInputElement
const btn = document.getElementById("add")! as HTMLButtonElement;

function add(n1: number, n2: number){
    return n1 + n2;
};

btn.addEventListener('click', function(){
    console.log(add(+opa.value, +opb.value));
});