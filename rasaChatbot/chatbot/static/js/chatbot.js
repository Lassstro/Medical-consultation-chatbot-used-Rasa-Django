const BOT_IMG = "/static/media/images/icons8-chatbot-60.png";
const PERSON_IMG = "/static/media/images/icons8-user-60.png";
const BOT_NAME = "MTAbot";
const PERSON_NAME = "You";


const msgerChat =  document.querySelector(".msger-chat");
const msgerMicBtn = document.querySelector(".msger-mic-btn");
const micIcon = msgerMicBtn.firstElementChild;
const msgerForm =  document.querySelector(".msger-inputarea");
const msgerInput =  document.querySelector(".msger-input");
const textVoice = document.querySelector(".text-voice")

let onMic = false

const synth = window.speechSynthesis
var utter = new SpeechSynthesisUtterance();
utter.lang = "vi-VN"

const reg = new webkitSpeechRecognition();
reg.lang = "vi-VN";
reg.continuous = false;
reg.interimResults = false;
reg.maxAlternatives = 1;


msgerMicBtn.addEventListener("click", () => {
    if (onMic){
        onMic = false
        reg.stop()
    }
    else {
        onMic = true
        reg.start()
    }
})

reg.addEventListener("result", resultOfSpeechRecognition)
function resultOfSpeechRecognition(event) {
    const msgText = event.results[0][0].transcript;
    if (!msgText) return;
    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    if (msgText == "sẵn sàng" || msgText == "vui lòng"){
        appendMessage(BOT_NAME, BOT_IMG, "left", "Hãy đưa thẻ bảo hiểm y tế của bạn vào vị trí bên dưới");
        utter.text = "Hãy đưa thẻ bảo hiểm y tế của bạn vào vị trí bên dưới";
        synth.speak(utter)
    }
    sendMessage(msgText);
}

reg.addEventListener("end", () => {
    micIcon.classList.remove("text-danger")
    // Restart micro if onMic = true
    if (onMic){
        reg.start()
    }
})

reg.addEventListener("start", () => {
    micIcon.classList.add("text-danger")
})

function sendMessage(requestText) {
    fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: requestText
        })
    })
    .then(response => response.json())
    .then(data => {
        var responseText = data[0].text
        appendMessage(BOT_NAME, BOT_IMG, "left", responseText);
        utter.text = responseText;
        synth.speak(utter)
    })
    .catch(error => console.error(error));
}

function appendMessage(name, img, side, text) {
    const msgHTML = `
    <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
        <div class="msg-bubble">
            <div class="msg-info">
                <div class="msg-info-name">${name}</div>
                <div class="msg-info-time">${new Date().toLocaleTimeString()}</div>
            </div>
            <div class="msg-text">${text}</div>
        </div>
    </div>
    `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}
// function refreshTime() {
//     const timeDisplay = document.getElementById('current-datetime');
//     const dateString = new Date().toLocaleString();
//     const formattedString = dateString.replace(", ", " - ");
//     timeDisplay.textContent = formattedString;
// }
// setInterval(refreshTime, 1000);

