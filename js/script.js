var container_fluid = document.querySelector(".container-fluid")

var all_light_dark = document.querySelectorAll(".input-group")
var light = document.querySelector(".btn-light")
var dark = document.querySelector(".btn-dark")

var allproducts = document.querySelectorAll(".list li")

var div1 = document.querySelector("#div1")
var div2 = document.querySelector(".div2")
var btn1 = document.querySelector("#btnprice")

var totalprice = 0
let body = document.querySelector('body')
all_light_dark.forEach(function (light_dark) {
    dark.onclick = function (){
        container_fluid.style.color="white";
        container_fluid.style.background="black";
        body.style.transition = '0.05s'
    }
    light.onclick = function (){
        container_fluid.style.color="black";
        container_fluid.style.background="white";
        body.style.transition = '0.05s'
    }
});

allproducts.forEach(function (item){
    item.onclick = function (){
        totalprice += +(item.getAttribute("price"))
        div1.innerHTML += item.textContent + ' - '

        if (div1.innerHTML != ""){
            btn1.style.display="block";
        }
    }
})

btn1.onclick = function (){
    div2.innerHTML = "total price: "+totalprice;
}
