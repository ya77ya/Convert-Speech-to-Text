const texts = document.querySelector(".texts"); //const = constant 

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'ar-SA'; //default value

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
    texts.appendChild(p);
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

    p.innerText = text;
    if (e.results[0].isFinal) {
        if (text.includes("how are you")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "I am fine. How are you?";
            texts.appendChild(p);
        }
        if (
            text.includes("what's your name") ||
            text.includes("what is your name")
        ) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "My Name is Yahya";
            texts.appendChild(p);
        }
        if (text.includes("open Google")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "opening google";
            texts.appendChild(p);
            console.log("opening google");
            window.open("https://www.google.com/");
        }
        p = document.createElement("p");
    }
});

recognition.addEventListener("end", () => {
    recognition.start();
});

recognition.start();
document.getElementById("langauge").onclick

function langauge_change() {

    if (recognition.lang == 'en-US') {
        lan = 'ar-SA';
        document.getElementById('lang1').innerHTML = 'Arabic';
        recognition.lang = 'ar-SA';
    } else if (recognition.lang == 'ar-SA') {
        lan = 'en-US';
        document.getElementById('lang1').innerHTML = 'English';
        recognition.lang = 'en-US';
    }
}