function submit(){
    var Firstname = document.getElementById("FirstName").value 
console.log(Firstname)

    var Lastname = document.getElementById("LastName").value 
   console.log(Lastname)
    
var address = document.getElementById("Address").value
console.log(address)

var Pincode = document.getElementById("Pincode").value
console.log(Pincode)

var male = document.getElementById("male").value
console.log(male)

var Female = document.getElementById("Female").value
console.log(Female)

var country = document.getElementById("country").value
console.log(country)

var state= document.getElementById("state").value
console.log(state)


let td1 = document.getElementById("td1")
td1.innerHTML= Firstname

let td2 = document.getElementById("td2")
td2.innerHTML = Lastname

let td3 = document.getElementById("td3")
td3.innerHTML = address

let td4 = document.getElementById("td4")
td4.innerHTML = Pincode


if(document.getElementById("male").checked){
let td5 = document.getElementById("td5")
td5.innerHTML= male
}
else if(document.getElementById("Female").checked){
    let td5  = document.getElementById("td5")
    td5.innerHTML = Female 
}

let td6 = document.getElementById("td6")
let checkbox = document.getElementsByName("selectone") 


let list = [];

for(let i=0;i<checkbox.length;i++){
if(checkbox[i].checked){
 
    console.log(checkbox[i].value)
    list.push(checkbox[i].value) 
}
}

td6.innerHTML=list
// console.log(list.length)

if(list.length<2){
    alert("Please select atleast 2")

    td6.innerHTML =""
}




let td7 =document.getElementById("td7")
td7.innerHTML = country 


let td8 = document.getElementById("td8")
td8.innerHTML = state



}