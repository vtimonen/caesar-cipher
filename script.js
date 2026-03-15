const inputElement = document.getElementById("encrypt");
const shiftElement = document.getElementById("shift");
const resultSection = document.getElementById("result-data");


function encrypt() {
    let inputText = inputElement.value;
    let shiftKey = parseInt(shiftElement.value);
    let finalResult = "";

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (/[a-zA-Z]/.test(char)) {
            let code = inputText.charCodeAt(i);
            
            let base = char === char.toLowerCase() ? 97 : 65; 

            let shiftedCode = (code - base + shiftKey) % 26 + base;
            
            finalResult += String.fromCharCode(shiftedCode);
        } else {
            finalResult += char; 
        }
    }
    console.log(finalResult);

    
    resultSection.innerHTML = `
    <div>
    <h2>Encrypted text</h2>
    <p>${finalResult}</p>
    </div>
    `
}