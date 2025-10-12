import { getBotResponse } from './eliza.js';

const DEBUG = false;
const log = (msg) => { if (DEBUG) console.log(msg); };


function showResponse(response) {
    addToChatWindow(response,'bot');
}

function getResponse(message) {
    return getBotResponse(message);
}

function processMessage(message) {
    let response = getResponse(message);

    showResponse(response);
}


function addToChatWindow(message, speaker) {
    let chatWindow = document.getElementById('chatWindow');
    let article = document.createElement('article');
    let paragraph = document.createElement('p');

    if (speaker === 'bot') {
        article.className = 'bot-messages';
    } else {
        article.className = 'user-messages';
    }

    paragraph.textContent = message;
    article.appendChild(paragraph);
    chatWindow.appendChild(article);

    chatWindow.scrollTop = chatWindow.scrollHeight;
}



function send() {
    const messageBox = document.getElementById('messageBox');
    const message = messageBox.value.trim();

    if (!message) return;

    addToChatWindow(message);
    processMessage(message);

    messageBox.value = '';
    messageBox.focus();
}



function init() {
    log('Initializing chat interface');

    let sendButton = document.getElementById('sendBtn');
    let messageBox = document.getElementById('messageBox');
    let chatForm = document.getElementById('chatForm');

    sendButton.addEventListener('click', function () {
        send();
    });

    messageBox.addEventListener('keypress', function (e) {
        if( e.key === 'Enter') {
        e.preventDefault();
        send();
    }
    });

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        send();
    });
}

window.addEventListener('DOMContentLoaded', init);