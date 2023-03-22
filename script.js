document.getElementById('texto').addEventListener("mouseover",()=>{
    decir(document.getElementById("texto").textContent);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
