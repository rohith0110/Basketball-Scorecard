# Basketball Scorecard

This project is an interactive, web-based basketball scorecard created as part of a JavaScript programming course. It provides a clean and retro-themed interface for keeping track of scores, managing a game timer, and offering a full suite of keyboard shortcuts for efficient use.

![A preview of the website](/Preview.png "Page preview")

## ✨ Features

- **Dual Score Tracking:** Independently manage scores for the **Home** and **Away** teams.
- **Intuitive Score Buttons:** Easily add +1, +2, or +3 points to either team with a single click.
- **Integrated Game Timer:** A 90-minute countdown timer that displays minutes, seconds, and tenths of a second.
  - The timer must be running to add or subtract points.
  - A message appears at the 45-minute mark to indicate halftime.
- **Full Game Controls:**
  - **Start/Resume:** Begin or continue the countdown.
  - **Pause:** Halt the timer at any moment.
  - **Reset:** Clears all scores, resets the timer to 90 minutes, and clears any messages.
- **Visual Feedback:** The score that was last updated flashes with a "glow" effect, making it easy to see changes.
- **Comprehensive Hotkeys:** Control every aspect of the scorecard without using a mouse.
- **On-Screen Hotkey Helper:** Press `?` to toggle a handy menu that lists all available keyboard shortcuts.
- **Responsive Design:** The layout adapts smoothly to various screen sizes, from mobile phones to desktop monitors.

## 🚀 How to Use

1. Open the `index.html` file in any modern web browser.
2. Press the **Start** button (▶️) or the `Enter` key to begin the game. The timer will start counting down.
3. Use the `+1`, `+2`, and `+3` buttons to add points to the Home or Away teams.
4. Alternatively, use the keyboard shortcuts listed below for faster control.
5. Use the **Pause** (⏸️) and **Reset** (🔄) buttons as needed to manage the game.
6. If you forget the shortcuts, press the `?` key to open the hotkey helper menu.

## ⌨️ Keyboard Shortcuts

The scorecard is fully controllable via the keyboard:

| Action                 | Home Team    | Away Team   | Game Control |
| ---------------------- | ------------ | ----------- | ------------ |
| **Add 1 Point**        | `Ctrl` + `1` | `Alt` + `1` |              |
| **Add 2 Points**       | `Ctrl` + `2` | `Alt` + `2` |              |
| **Add 3 Points**       | `Ctrl` + `3` | `Alt` + `3` |              |
| **Subtract 1 Point**   | `Ctrl` + `-` | `Alt` + `-` |              |
| **Start/Resume Timer** |              |             | `Enter`      |
| **Pause Timer**        |              |             | `Space`      |
| **Reset Game**         |              |             | `R`          |
| **Toggle Help Menu**   |              |             | `?`          |

## 🛠️ Technologies Used

This project was built to practice core web development skills using:

- **HTML5:** For the structure and content of the application.
- **CSS3:** For styling, layout, animations, and responsive design. Custom properties (variables) were used for easy theme management.
- **JavaScript (ES6):** For all the interactive logic, including DOM manipulation, event handling (clicks and key presses), and managing the timer with `setInterval`.
