import {getBotResponse} from "./eliza.js";

class ChatInterface extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
            :root{ --radius: 1rem;}
            :host{
            display:flex;
            background: linear-gradient(to bottom right, mediumslateblue, rebeccapurple);
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: clamp(0.5rem, 2vw, 2rem);
            }

simple-chat {
    display: flex;
    flex-direction: column;
    width: clamp(22rem, 40vw, 32rem);
    height: clamp(35rem, 70vh, 45rem);
    background: white;
    border-radius: var(--radius);
    box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
}
.chat-header {
    background: dodgerblue;
    color: white;
    text-align: center;
    padding-block: 1rem;
}
.chat-header h1 {
    margin: 0;
    font-size: clamp(1.4rem, 2vw, 1.8rem);
}

.chat-header .subtitle {
    margin: 0;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
  
}


.messages {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    overflow-y: auto;
    background: white;
}

.bot-messages  {
    align-self: flex-start;
    background: lightgray;
    border-radius: var(--radius) var(--radius) var(--radius) 0.2rem;
    max-width: 40ch;
    padding: .5rem 1rem;
    font-size: clamp(.5rem, 2vw, 1rem);
    color:black;
}
.user-messages {
    background: dodgerblue;
    color: white;
    align-self: flex-end;
    border-radius: var(--radius) var(--radius) 0.2rem var(--radius) ;
    max-width: 40ch;
    padding: .5rem 1rem;
    font-size: clamp(.5rem, 2vw, 1rem);
}


.input-area {
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    border-top: 0.1rem solid lightgray;
    background: white;
    box-sizing: border-box;
}

.input-area input {
    flex: 1;
    padding: 0.7rem;
    border: 0.1rem solid lightgray;
    border-radius: 1.5rem;
    font-size: 1rem;
    background: whitesmoke;
    color: black;
}
.input-area button:hover {
    background: darkgray;
}

.input-area button {
    background: lightgray;
    color: white;
    border: none;
    border-radius: 1.5rem;
    padding: 0 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.1s ease;
}
.chat-footer {
    background: lightgoldenrodyellow;
    border-top: 0.1rem solid gold;
    font-size: 0.9rem;
    padding: 0.25rem 1rem;
    text-align: center;
    color: darkgoldenrod;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
</style>
<simple-chat>
    <header class="chat-header">
        <h1>Chat Assistant</h1>
        <p class="subtitle">Prototype: Graceful Degradation</p>
    </header>

    <article class="messages"  aria-live="polite" aria-relevant="additions">
        <p class="bot-messages">Hello! How can I help you?</p>
    </article>

    <form class="input-area" autocomplete="off">
        <input type="text" placeholder="Type a message...">
        <button type="submit">Send</button>
    </form>

    <footer class="chat-footer">
        <p>
            This chatbot uses graceful degradation.
        </p>
    </footer>
</simple-chat>
</main>

`;
        this.message= this.shadowRoot.querySelector('.messages');
        this.form = this.shadowRoot.querySelector('form');
        this.input = this.shadowRoot.querySelector('input');

        let self= this;

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
customElements.define('chat-interface', ChatInterface);

