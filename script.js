const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?","/"];

const password1Elem = document.getElementById("password1");
const password2Elem = document.getElementById("password2");
const generatedElem = document.getElementById("generated");

function generate(){
    generatedElem.innerHTML = renderingHtml(createRandom(), createRandom());
    console.log(generatedElem.innerHTML)
}

function createRandom(){
    let passwordRandom = ''
    for (let i = 0; i < 10; i++){
        passwordRandom += characters[random()]
    }
    return passwordRandom
}

function random(){
    return (Math.floor(Math.random() * characters.length));
}

function copyText(event){
    const { innerText } = event.target
    navigator.clipboard.writeText(innerText)
    alert("copied the text " + innerText)
}

function renderingHtml(...string){
    console.log(string)
    let html = ''
    for (let i = 0; i < 2; i++){
        html += `<p class="password" onclick="copyText(event)">
        <i class="fa-regular fa-copy"></i> ${escapeHTML(string[i])}</p>`
    }
    console.log(html)
    return html
}


function escapeHTML(string) {
    return string.replace(/[&<>"']/g, function(match) {
        const escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return escapeMap[match];
    });
}