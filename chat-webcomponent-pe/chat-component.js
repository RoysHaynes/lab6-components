import {getBotResponse} from "./eliza.js";
class SimpleChat extends HTMLElement {
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

    addMessage(text, role) {
        let msg = document.createElement('p');
        msg.className = role + '-messages';
        msg.textContent = text;
        this.message.appendChild(msg);
        this.message.scrollTop = this.message.scrollHeight;
    }
}
customElements.define('simple-chat', SimpleChat);