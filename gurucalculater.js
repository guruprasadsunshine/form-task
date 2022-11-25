let input1 = document.createElement("input")
input1.setAttribute("class"," inpu  text-dark   ")
input1.setAttribute("id","inputarea")
document.body.append(input1)
let inputarea = document.querySelector(".input1")
inputarea.append(input1)


let buttonstar=document.createElement("button")
buttonstar.setAttribute("class","btn w-100 h-100 ")
buttonstar.setAttribute("id","buttonstar")
buttonstar.innerText="*"
let star = document.querySelector(".star")
star.append(buttonstar)

let slashb = document.createElement("button")
slashb.setAttribute("class","btn w-100 h-100 ")
slashb.setAttribute("id","buttonslash")
slashb.innerText="/"
let slash = document.querySelector(".slash")
slash.append(slashb)


let iffen = document.createElement("button")
iffen.setAttribute("class","btn w-100 h-100 ")
iffen.setAttribute("id","buttoniffen")
iffen.innerText="-"
let btniffen = document.querySelector(".ifn")
btniffen.append(iffen)

let plusbtn=document.createElement("button")
plusbtn.setAttribute("class","btn w-100 h-100")
plusbtn.setAttribute("id","plus1")
plusbtn.innerText ="+"
let plus2 = document.querySelector(".plus")
plus2.append(plusbtn)


let ninebutton = document.createElement("button")
ninebutton.setAttribute("class","btn w-100 h-100")
ninebutton.setAttribute("id","nine")
ninebutton.innerText="9"
let nine = document.querySelector(".nine")
nine.append(ninebutton)

let eightbutton =document.createElement("button")
eightbutton.setAttribute("class","btn w-100 h-100")
eightbutton.setAttribute('id',"eightbtn")
eightbutton.innerText="8"
let eight = document.querySelector(".eight")
eight.append(eightbutton)

let sevenbtn=document.createElement("button")
sevenbtn.setAttribute("class","btn w-100 h-100")
sevenbtn.setAttribute('id',"sevenbtn")
sevenbtn.innerText="7"
let sev = document.querySelector(".seven")
sev.append(sevenbtn)


let sixbtn =document.createElement("button")
sixbtn.setAttribute("class","btn w-100 h-100")
sixbtn.setAttribute("id","sixbtn")
sixbtn.innerText='6'
let six = document.querySelector(".six")
six.append(sixbtn)


let fivebtn= document.createElement("button")
fivebtn.setAttribute("class",'btn w-100 h-100')
fivebtn.setAttribute("id","fivebtn")
fivebtn.innerText="5"
let five = document.querySelector(".five")
five.append(fivebtn)

let fourbtn = document.createElement("button")
fourbtn.setAttribute("class","btn w-100 h-100")
fourbtn.setAttribute("id","fourbtn")
fourbtn.innerText="4"
let four = document.querySelector(".four")
four.append(fourbtn)


let threebtn = document.createElement("button")
threebtn.setAttribute("class","btn w-100 h-100")
threebtn.setAttribute('id',"threebtn")
threebtn.innerText="3"
let three = document.querySelector('.three')
three.append(threebtn)


let twobtn = document.createElement('button')
twobtn.setAttribute("class","btn w-100 h-100")
twobtn.setAttribute("id","twobtn")
twobtn.innerText="2"
let two = document.querySelector('.two')
two.append(twobtn)

let onebtn = document.createElement("button")
onebtn.setAttribute("class","btn w-100 h-100")
onebtn.setAttribute("id","onebtn")
onebtn.innerText="1"
let one = document.querySelector(".one")
one.append(onebtn)

let zerobtn = document.createElement("button")
zerobtn.setAttribute("class","btn w-100 h-100")
zerobtn.setAttribute("id","zerobtn")
zerobtn.innerText="0"
let zero = document.querySelector(".zero")
zero.append(zerobtn)

let dotbtn = document.createElement('button')
dotbtn.setAttribute("class","btn w-100 h-100")
dotbtn.setAttribute("id","dotbtn")
dotbtn.innerText="."
let dot = document.querySelector(".dot")
dot.append(dotbtn)

let modulobtn = document.createElement("button")
modulobtn.setAttribute("class","btn w-100 h-100")
modulobtn.setAttribute("id","modulobtn")
modulobtn.innerText="/"
let modulo = document.querySelector(".modulo")
modulo.append(modulobtn)

let clearbtn = document.createElement('button')
clearbtn.setAttribute("class","btn w-100 h-100")
clearbtn.setAttribute("id","clearbtn")
clearbtn.innerText="C"
let clear = document.querySelector(".clear")
clear.append(clearbtn)

let equalbtn = document.createElement('button')
equalbtn.setAttribute("class","btn w-100 h-100")
equalbtn.setAttribute("id","equalbtn")
equalbtn.innerText="="
let equal = document.querySelector(".equal")
equal.append(equalbtn)




// writing function for calculator

buttonstar.addEventListener("click",()=>{
input1.value += buttonstar.innerText
input1.value = input1.value
})

slashb.addEventListener("click",()=>{
    input1.value += slashb.innerText 
})

iffen.addEventListener("click",()=>{
    input1.value += iffen.innerText
})

plusbtn.addEventListener("click",()=>{
input1.value += plusbtn.innerText
})

ninebutton.addEventListener("click",()=>{
input1.value += i=ninebutton.innerText
})

eightbutton.addEventListener("click",()=>{
input1.value +=eightbutton.innerText
})


sevenbtn.addEventListener("click",()=>{
    input1.value += sevenbtn.innerText
})

sixbtn.addEventListener("click",()=>{
    input1.value +=sixbtn.innerText
})

fivebtn.addEventListener("click",()=>{
    input1.value+=fivebtn.innerText
})

fourbtn.addEventListener("click",()=>{
    input1.value +=fourbtn.innerText
})

threebtn.addEventListener("click",()=>[
    input1.value +=threebtn.innerText
])

twobtn.addEventListener("click",()=>{
    input1.value +=twobtn.innerText
})

onebtn.addEventListener("click",()=>{
input1.value +=onebtn.innerText
})

zerobtn.addEventListener("click",()=>{
input1.value +=zerobtn.innerText
})

dotbtn.addEventListener("click",()=>{
input1.value +=dotbtn.innerText
})


modulobtn.addEventListener("click",()=>{
input1.value += modulobtn.innerText
})

equalbtn.addEventListener("click",()=>{
if(input1.value=== ""){
    input1.value= ""
}
else{
    let equal = eval(input1.value)
    input1.value = equal;
}

})


// clear button//-

clearbtn.addEventListener("click",()=>{
input1.value = ""
})