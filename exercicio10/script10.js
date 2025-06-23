let n1 = document.getElementById('resultado');
let n2 = 1;

function contar(){
n1.innerHTML =`<p>conatdor de 1 até 10</p>`;
while(n2 <= 10) {
    n1.innerHTML +=`${n2},🚓`;
    n2++;
}
n1.innerHTML += `🍻`
}