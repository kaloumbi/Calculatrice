import { CalculetteObject } from "./librairies/functions.js";

//un evenement qui me permet de regarder si la fenetre du navigateur est bien chargée
window.onload = ()=>{
   //on commence à recuperer les elements
   const elements = document.querySelectorAll(".col-calculette-1 .line-calculette > *")
   const screen = elements[0]
   const cancel = elements[1]
   const del = elements[2]
   //ajout moi dans le tableau les elements à partir de la posision 3 vers la fin
   const touchs = ([].slice.call(elements)).slice(3)

    CalculetteObject.initEvent (touchs)
}