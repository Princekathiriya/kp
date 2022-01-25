var incrementation = Array.from(document.getElementsByClassName("button-PLUS"))  ;
console.log(incrementation)
incrementation.map(el => el.addEventListener("click",function(){
el.nextElementSibling.innerHTML = Number(el.nextElementSibling.innerHTML)+1;
document.getElementById('shopping-bag-total').innerHTML = total();
 }));

  var décrementation = Array.from(document.getElementsByClassName("button-minus")) ;
 décrementation.map(el => el.addEventListener("click",function(){
     if(el.previousElementSibling.innerHTML>0){
 el.previousElementSibling.innerHTML = Number(el.previousElementSibling.innerHTML)-1;
 document.getElementById('shopping-bag-total').innerHTML = total();

} }));


var elmnt = document.getElementsByClassName("button-exit");
for(let el of elmnt) {
    el.addEventListener("click", function(){
        el.parentNode.remove();
       document.getElementById('shopping-bag-total').innerHTML = total();
    })
}

let like = document.querySelectorAll(".fa-heart")
for(let el of like)
el.addEventListener("click",function(){
    el.style.color='red';
})

function total(){
    let price = document.getElementsByClassName("SOMME");
    let qt = document.getElementsByClassName("valeur") ;
    let sum = 0 ;
    for (let i=0 ;i < price.length;i++){
        sum+=(price[i].innerHTML)*(qt[i].innerHTML);
    }
    return sum;
}
