# 🧩 Lab 6: Chat Component

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

---

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

