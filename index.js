/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = 0
const convertBtn = document.getElementById("convert")
const feet = 3.281
const gallon = 0.264
const pound = 2.204


convertBtn.addEventListener("click",function (){
    inputEl = document.getElementById("input-el").value 
    return inputEl
    })

convertBtn.addEventListener("click",function (){
    let textLength = document.getElementById("lengthAnswer")
    textLength.innerHTML = 
        `${inputEl} mètres = ${(inputEl*feet).toFixed(1)} pieds | 
        ${inputEl} pieds = ${(inputEl/feet).toFixed(1)} mètres`
    
    let textVolume = document.getElementById("volumeAnswer")
    textVolume.innerHTML = 
        `${inputEl} litres = ${(inputEl*gallon).toFixed(1)} gallons | 
        ${inputEl} gallons = ${(inputEl/gallon).toFixed(1)} litres`
    
    let textMass = document.getElementById("massAnswer")
    textMass.innerHTML = 
        `${inputEl} kilos = ${(inputEl*pound).toFixed(1)} livres | 
        ${inputEl} livres = ${(inputEl/pound).toFixed(1)} kilos`
    
    })