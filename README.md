# Lab 6: Chat Component

## Overview
This lab introduces **component-based thinking**, a core concept in modern web development.  
We’ll build the same **chat interface** four different ways to understand how architecture patterns, encapsulation, and progressive enhancement impact maintainability, reusability, and accessibility.

By comparing these approaches, I’ll learn how decisions about where to place structure, style, and behavior affect scalability and future design choices.

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

Each step will include a short reflection added to this README.

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


## Comparing the Approaches (to be filled out)
Note differences in code organization
Consider reusability of each approach
Think about maintenance and debugging
Reflect on when you'd use each approach



## License
This project is licensed under the MIT License 

---

## Author
**Roy Haynes**  
University of San Diego – COMP 305

