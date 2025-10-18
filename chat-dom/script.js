/**
 * @file script.js
 * @description DOM Manipulation approach for the Chat Assistant.
 * Adds interactivity to a static layout using vanilla JavaScript.
 * Handles user input, dynamic message creation, scrolling, and Eliza-style bot responses.
 */
import { getBotResponse } from '../chat-webcomponent-pe/eliza.js';

const DEBUG = false;

/**
 * Conditional logger for debugging mode.
 * @param {string} msg - Message to log to the console.
 */
const log = (msg) => { if (DEBUG) console.log(msg); };


/**
 * Displays the bot's response in the chat window.
 * @param {string} response - The text of the bot's reply.
 */
function showResponse(response) {
    addToChatWindow(response,'bot');
}


/**
 * Retrieves the bot's reply using the Eliza-style pattern matcher.
 * @param {string} message - The user's input message.
 * @returns {string} Bot's response.
 */
function getResponse(message) {
    return getBotResponse(message);
}

/***
* Processes a user message by generating and displaying the bot’s reply.
* @param {string} message - The user's message.
*/
function processMessage(message) {
    let response = getResponse(message);

    showResponse(response);
}


/**
 * Appends a message bubble to the chat window.
 * @param {string} message - The text content of the message.
 * @param {'user' | 'bot'} speaker - Indicates who sent the message.
 */
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



/**
 * Reads user input, displays it, processes it, and clears the input field.
 */
function send() {
    const messageBox = document.getElementById('messageBox');
    const message = messageBox.value.trim();

    if (!message) return;

    addToChatWindow(message);
    processMessage(message);

    messageBox.value = '';
    messageBox.focus();
}

/**
 * Initializes event listeners for chat input, button, and form submission.
 * Prevents page reloads and binds message handling functions.
 */
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