import { getBotResponse } from './eliza.js';

const DEBUG = false;
const log = (msg) => { if (DEBUG) console.log(msg); };


function showResponse(response) {
    addToChatWindow(response, 'Bot');
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
    chatWindow.innerHTML += `<p class="${speaker}">${speaker}: ${message}</p>`;
}


function send() {
    let messageBox = document.getElementById('messageBox');
    let message = messageBox.value;

    let chatWindow = document.getElementById('chatWindow');

    messageBox.value = ''; // clear the field
    messageBox.focus();

    addToChatWindow(message,'User');

    processMessage(message);
}


function init() {
    log('Initializing chat interface');
    document.getElementById('sendBtn').addEventListener('click', function () {
        send();
    });
}

window.addEventListener('DOMContentLoaded', init);