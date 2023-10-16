//
const elements = document.querySelectorAll(".col-calculette-1 .line-calculette > *")
const screen = elements[0]
const cancel = elements[1]
const del = elements[2]


export const CalculetteObject = {
    //pour initialiser les evenements sur les touches
    initEvent: (touchs) => {
        cancel.onclick = ()=> CalculetteObject.initCancel()
        del.onclick = ()=> CalculetteObject.initDelete()

        if (touchs.length) { //si la taille existe(!=0)
            touchs.forEach(touch => {
                touch.onclick = ()=>{
                    const touchValue = touch.innerText
                    screen.value += `${touchValue} `
                    console.log(value);
                }
            });
        }   
    },
    initCancel: ()=>{
        screen.value = ""
    },

    initDelete: ()=>{
        screen.value = screen.value.substring(0, screen.value.length - 1) //permet de recuperer une sous chaine (exemple: 0 à taille -1)
    }
}