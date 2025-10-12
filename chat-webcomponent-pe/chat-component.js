import {getBotResponse} from "./eliza.js";
class SimpleChat extends HTMLElement {
    connectedCallback() {
        this.elMessage= this.querySelector('.messages');
        this.elForm = this.querySelector('form');
        this.elInput = this.querySelector('input');

        let self = this;

        this.elForm.addEventListener('submit', function(e){
            e.preventDefault();
            let text = self.elInput.value.trim();
            if(!text) return;

            self.addMessage(text,'user');
            self.elInput.value = '';

            let reply=getBotResponse(text);
            self.addMessage(reply,'bot')


        });
    }

    addMessage(text, role) {
        let msg = document.createElement('p');
        msg.className = role + '-messages';
        msg.textContent = text;
        this.elMessage.appendChild(msg);
        this.elMessage.scrollTop = this.elMessage.scrollHeight;
    }
}
customElements.define('simple-chat', SimpleChat);