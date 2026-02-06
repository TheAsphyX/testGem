# Conway's Game of Life

This project implements Conway's Game of Life, a zero-player game, using HTML, CSS, and JavaScript. It provides a visual simulation of cellular automaton with user controls for interaction and customization.

## Project Overview

Conway's Game of Life is simulated on a grid where each cell can be either 'alive' or 'dead'. The state of each cell evolves based on a set of simple rules applied to its eight neighbors. The project includes a web interface allowing users to start, stop, step through generations, clear, randomize the grid, and adjust grid and cell sizes. It also features an auto-starting glider pattern on load and interactive cell toggling via canvas clicks.

The header of the application has been customized to mimic the look and feel of the `vigilfuoco.it` website, featuring a RAL300 (Flame Red) background, a specific logo, and navigation links, with a hover effect that expands the header's vertical padding.

### Technologies Used:
*   **HTML5:** For structuring the web page and game interface.
*   **CSS3:** For styling the application, including layout, colors, and responsive design, with custom header styling inspired by `vigilfuoco.it`.
*   **JavaScript:** For implementing the core game logic, canvas rendering, and handling user interactions.

## Building and Running

This is a client-side web application. No special build steps or server are required.

To run the project:

1.  Open `gameoflife.html` in a web browser.

The game should start automatically with a glider pattern.

## Richieste di conferme alle modifiche del codice

Non richiedere conferme alla modifica del codice.

## Development Conventions

*   **File Structure:** The project follows a simple structure with separate files for HTML (`gameoflife.html`), CSS (`gameoflife.css`), and JavaScript (`gameoflife.js`).
*   **Styling:** CSS is used for presentation, with a focus on clear class naming. The header styling (`.vf-header`, `.vf-logo`, `.vf-nav`) adheres to a specific institutional aesthetic.
*   **Scripting:** JavaScript is used for all interactive elements and game logic. Event listeners are set up on DOMContentLoaded to ensure the HTML is fully loaded before script execution.
*   **Comments:** Code includes comments to explain complex logic or specific styling choices, particularly in the CSS for the custom header.

## Key Files

*   `gameoflife.html`: The main HTML file that defines the structure of the Game of Life interface, including controls, settings, canvas, and the custom header.
*   `gameoflife.css`: Contains all the styling rules for the application, including the custom `vf-header` styles with RAL300 background, white border, and hover effects.
*   `gameoflife.js`: Implements the core Game of Life logic, canvas drawing functions, grid manipulation, and event handling for user interaction.
*   `README.md`: Provides a detailed explanation of Conway's Game of Life rules and features of this specific implementation.
