//
const elements = document.querySelectorAll(".col-calculette-1 .line-calculette > *")
let operators = document.querySelectorAll(".col-calculette-2 .line-calculette > *")
const screen = elements[0]
const cancel = elements[1]
const del = elements[2]
const result = operators[0]
const equal = operators[operators.length -1]
operators = [].slice.call(operators).slice(1, operators.length - 1) //Recuperer le dernier element
let operatorSelected


export const CalculetteObject = {
    //pour initialiser les evenements sur les touches
    initEvent: (touchs) => {
        console.log("my all operators!", operators);
        cancel.onclick = ()=> CalculetteObject.initCancel()
        del.onclick = ()=> CalculetteObject.initDelete()
        equal.onclick = ()=> CalculetteObject.initEqual()

        if (touchs.length) { //si la taille existe(!=0)
            touchs.forEach(touch => {
                touch.onclick = ()=>{
                    const touchValue = touch.innerText
                    screen.value += `${touchValue} `
                    result.value = "" //on supprime le contenu resultat dès qu'on ajoute un operateur
                    operatorSelected = false //chaque clic de touche desactive l'operateur
                }
            });
        } 
        if (operators.length) { //si la taille existe(!=0)
            operators.forEach(operator => {
                operator.onclick = ()=>{
                    if (!operatorSelected) {
                        const touchValue = operator.innerText
                        screen.value += `${touchValue} `
                        operatorSelected = true
                        console.log(touchValue);
                    }
                }
            });
        }   
    },
    initCancel: ()=>{
        screen.value = ""
        result.value = "" //supprimer tout le contenu des deux ecran

    },

    initDelete: ()=>{
        screen.value = screen.value.substring(0, screen.value.length - 1) //permet de recuperer une sous chaine (exemple: 0 à taille -1)
        operatorSelected = false //on desactive l'operateur après chaque supression
        result.value = "" //supprimer le contenu du resultat
    },

    initEqual: ()=>{
        if (!operatorSelected) { // s'il n'y a pas d'operateur, on évalue
            result.value = eval(screen.value) //eval nous gère le calcul suivant les caractères données
        }
    }
}