document.getElementsByClassName("container")
document.getElementById("container").style.color="red";
document.getElementById("container").style.backgroundColor="grey";

document.getElementById("text").innerHTML="My name is Joan and I am an amazing human being";

let child=document.getElementById("container").childNodes;
console.log({child});

let children =document.getElementById("container").children;
console.log(children);

let p=document.createElement("p");
p.innerHTML="I am new"
document.getElementById("container").appendChild(p);
p.setAttribute('class',"paragraph");
p.setAttribute("id","paragraph");
document.getElementById("paragraph").style.color="black";

let button =document.getElementById("button");
button.addEventListener('click',function(){
    button.innerHTML= "Clicked !!";
    button.style.backgroundColor="teal"
    button.style.padding ="10px"
    button.style.borderRadius ="5px"
    button.style.border="none"
})

