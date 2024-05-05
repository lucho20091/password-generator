const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?","/"];


const btnEl = document.querySelector("#btn-generate")
let password1 = []
let password2 = []
const passwordEl1 = document.querySelector("#password1")
const passwordEl2 = document.querySelector("#password2")
const displayall = document.querySelector(".displayall")

btnEl.addEventListener("click", () => {
    password1 = []
    password2 = []
    for (let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * 95)
        let random2 = Math.floor(Math.random() * 95)
        password1.push(characters[random])
        password2.push(characters[random2])
    }
    display()
    all()
    console.log(password1)
    console.log(password2)
})

function display() {
        passwordEl1.textContent = password1.join("")
        passwordEl2.textContent = password2.join("")
}

function all(){
    displayall.textContent = characters
}