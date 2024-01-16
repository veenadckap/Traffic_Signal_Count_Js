let a=document.getElementById('innerDiv')
let b=document.getElementById('innerSecond')
let c=document.getElementById('innerThird');
let store=document.getElementById('num')
let count1 = 11;
let count2=6
let count3=11

let x=0;

setInterval(countdown,1000)

function countdown(){
if(x<11){
    a.style.backgroundColor='red'
    b.style.backgroundColor='black'
    c.style.backgroundColor='black'
    count1--
    store.textContent=count1

}
else if(x >=11 && x<16){

    a.style.backgroundColor='black'
    b.style.backgroundColor='yellow'
    c.style.backgroundColor='black'
    store.textContent=count2
    count2--

}else if(x >=16 && x<27){
    a.style.backgroundColor='black'
    b.style.backgroundColor='black'
    c.style.backgroundColor='green'
    count3--
    store.textContent=count3
}

x++
if(x>=27){
      count1 = 11;
      count2=6
      count3=11

}
if(x>=27){
    x=0
}
}