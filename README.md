# Lab 6: Chat Component

## Overview
This lab introduces **component-based thinking**, a core concept in modern web development.  
We’ll build the same **chat interface** four different ways to understand how architecture patterns, encapsulation, and progressive enhancement impact maintainability, reusability, and accessibility.

By comparing these approaches, I’ll learn how decisions about where to place structure, style, and behavior affect scalability and future design choices.

## Project Link

### Key Themes
- Components as self-contained UI units
- Progressive enhancement and graceful degradation
- Encapsulation with the Shadow DOM
- Comparing reusability vs. complexity across patterns

---

## Project Goals
By the end of this lab, I will have:
1. A complete chat interface implemented in **four different ways**:
    - **Prototype (HTML/CSS):** Purely visual design mock-up
    - **DOM Manipulation:** Vanilla JavaScript with event handling and Eliza-style bot
    - **Progressive Enhancement:** Custom element built on existing HTML
    - **Shadow DOM Component:** Fully encapsulated, reusable component
2. A working **Eliza-style chatbot** using simple pattern matching
3. Clean and semantic **HTML/CSS layouts**
4. Organized code structure and incremental Git commits showing development progression
5. A continuously updated README documenting design decisions and reflections

---

## Component Approaches

| Approach | Description | Focus |
|-----------|--------------|-------|
| **Prototype (HTML/CSS)** | Non-functional static layout | Visual design, semantic HTML |
| **DOM Manipulation** | Vanilla JS to add interactivity | Event handling, DOM updates |
| **Progressive Enhancement** | Custom element without Shadow DOM | Accessibility, graceful fallback |
| **Shadow DOM Component** | Fully encapsulated Web Component | Encapsulation, portability |

---

## Development Approach
This project will follow an **iterative, four-phase workflow** with incremental commits:
1. **Prototype:** Establish structure & style (HTML/CSS)
2. **DOM Manipulation:** Add JS logic for message flow & Eliza responses
3. **Progressive Enhancement:** Convert markup into a `<simple-chat>` custom element
4. **Shadow DOM:** Create `<chat-interface>` with encapsulated styles and behavior

---

## Repository Structure (Planned)
lab6-components/
│
├── index.html
├── styles.css
│
├── chat-prototype-html-css/
│   ├── index.html
│   └── styles.css
│
├── chat-dom/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── chat-webcomponent-pe/
│   ├── index.html
│   ├── styles.css
│   └── chat-component.js
│
└── chat-webcomponent-gd/
├── index.html
└── chat-component.js

---

## Design Decisions (to document as lab progresses)

## Design Decisions
### DOM approach
#### Moved prototype `<style>` and HTML structure into this
* Out of sheer laziness I just used the HTML structure and CSS style from the prototype and tried to brute force it into the DOM approach

#### Replaced `innerHTML` with `createElement()` and `appendChild()`
* Instead of injecting HTML directly with `innerHTML`, I now use DOM methods like `createElement()` and `appendChild()` as per the instructions
of the assignment.

#### Created a speaker identifier so that the CSS styles the appropriate speech
* Just used an if statement to differentiate who the speaker is so I could use my previous
CSS style sheet.

#### Created message elements dynamically with `<article>` and `<p>` tags
* Each chat message is now wrapped in semantic HTML elements (`<article>` for message grouping and `<p>` for text).
This structure matches the prototype’s HTML and ensures accessibility and consistent CSS styling across all chat messages.

#### Added event listeners for both click and Enter key
* I added event listeners for both the Send button and the Enter key. This makes the interface more intuitive, letting users send
messages in multiple ways. It improves accessibility and creates a smoother, more natural chat experience.

#### Used `e.preventDefault()` on form submission
* By default, pressing Enter in a form triggers a page reload. Using `e.preventDefault()` stops that behavior, 
preventing the chat from clearing itself after each message. This allows the conversation history to stay visible as the chat continues.

### Graceful Degradation 
#### Moved prototype HTML and CSS into JS
- Reused the same structure from the prototype and applied dynamic message handling.

#### Replaced `innerHTML` with DOM methods
- Used `createElement()` and `appendChild()` instead of `innerHTML` to safely generate messages without rewriting the DOM.

#### Added speaker differentiation
- Introduced conditional logic to assign `user` or `bot` message classes, ensuring correct CSS bubble alignment.

#### Used semantic HTML for messages
- Each message used `<article>` and `<p>` to maintain structure and accessibility.

#### Added event listeners for both Enter and Send
- Enhanced usability by supporting multiple ways to send messages.

#### Used `e.preventDefault()` to stop reload
- Prevented the form from clearing the conversation upon submission.

**Lesson Learned:**  
DOM manipulation gives full control but can get messy quickly as complexity grows. It’s powerful but not very modular.

---

### Progressive Enhancement
#### Started with working HTML first
- The base `<simple-chat>` element contained fully functional HTML (so it still displayed if JS failed).

#### Enhanced behavior with JavaScript
- Added message logic and Eliza responses dynamically through the custom element class.
- JS only enhanced the existing markup — it didn’t depend on it.

#### No Shadow DOM
- Styles were global, allowing easy debugging and shared visual consistency with other pages.


## Comparing the Approaches 
Each version of the chat built on the one before it. The prototype was just HTML and CSS which is simple and good for design, 
but not interactive. The DOM Manipulation version added JavaScript to make the chat work, but it wasn’t very organized 
and could get messy with more features. The Progressive Enhancement version started with working HTML and added extra 
features with JavaScript, so it still looked fine even if scripts didn’t load. The final Shadow DOM version kept everything 
together inside one reusable component, making it cleaner and more professional. Overall, each step showed how adding 
structure and interactivity changes how easy a project is to build, use, and maintain.

## License
This project is licensed under the MIT License 

---

## Author
**Roy Haynes**  
University of San Diego – COMP 305

