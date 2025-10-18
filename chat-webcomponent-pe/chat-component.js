/**
 * @file chat-component.js
 * @description Progressive Enhancement Web Component for the Chat Assistant.
 * This component starts as fully functional semantic HTML and is enhanced with JavaScript.
 * If JavaScript fails, the base markup (messages, form, etc.) still remains visible and accessible.
 */
import {getBotResponse} from "./eliza.js";

/**
 * A simple progressively enhanced chat component.
 * Enhances existing HTML inside <simple-chat> with interactivity and dynamic messaging.
 * @extends HTMLElement
 */
class SimpleChat extends HTMLElement {

    /**
     * Lifecycle hook called when the element is connected to the DOM.
     * Finds elements inside the component, attaches event listeners,
     * and handles user and bot message exchange.
     */
    connectedCallback() {
        this.message= this.querySelector('.messages');
        this.form = this.querySelector('form');
        this.input = this.querySelector('input');

        let self = this;

        this.form.addEventListener('submit', function(e){
            e.preventDefault();
            let text = self.input.value.trim();
            if(!text) return;

            self.addMessage(text,'user');
            self.input.value = '';

            let reply=getBotResponse(text);
            self.addMessage(reply,'bot')


        });
    }

    /**
     * Appends a chat message bubble to the chat window and scrolls to the bottom.
     * @param {string} text - Message text to display.
     * @param {'user' | 'bot'} role - Message role, used to determine CSS styling.
     */
    addMessage(text, role) {
        let msg = document.createElement('p');
        msg.className = role + '-messages';
        msg.textContent = text;
        this.message.appendChild(msg);
        this.message.scrollTop = this.message.scrollHeight;
    }
}
/**
 * Defines the <simple-chat> custom element for Progressive Enhancement.
 */
customElements.define('simple-chat', SimpleChat);