# **Dice Challenge**

A simple, interactive game built using HTML, CSS, and JavaScript. The **Dice Challenge** generates a random dice roll for two players whenever the page is refreshed, determining the winner or a draw.

---

## **Features**
- **Random Dice Rolls**:
  - Generates a random number between 1 and 6 for each player upon refreshing the page.
- **Dynamic Dice Display**:
  - Displays a dice image corresponding to the random number rolled.
- **Player Outcome Announcement**:
  - Declares "Player 1 Wins!", "Player 2 Wins!" or "Draw!" based on the dice rolls.
- **Minimalistic Design**:
  - A clean and easy-to-use interface.

---

## **Technologies Used**
- **HTML5**: Structures the content and elements of the dice game.
- **CSS3**: Provides the visual styles and layout.
- **JavaScript**:
  - Implements logic for random dice rolls and outcome determination.
  - Dynamically updates the DOM to reflect results.

---

## **Getting Started**

### **Prerequisites**
- A modern web browser with JavaScript enabled.

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayu1404/Dice-Challenge.git
   cd Dice-Challenge
   ```

2. Open the **index.html** file in your browser to start playing:
   ```bash
   open index.html
   ```

---

## **How to Play**
1. **Roll the Dice**:
   - Refresh the web page to roll the dice for both players.
2. **View Results**:
   - Check the result displayed at the top of the page:
     - "Player 1 Wins!🚩" if Player 1 rolls a higher number.
     - "🚩Player 2 Wins!" if Player 2 rolls a higher number.
     - "Draw!" if both players roll the same number.

---

## **How It Works**
1. **Generate Random Numbers**:
   - Uses `Math.random()` to generate a random number between 1 and 6 for each player.
2. **Update Dice Images**:
   - Dynamically updates the `src` attribute of the dice images to display the correct dice face.
3. **Determine the Winner**:
   - Compares the two dice rolls and updates the `<h1>` element with the corresponding outcome.

---

## **File Structure**
### **index.html**:
- Contains the structure for the dice game interface.
- Includes `<img>` tags for two dice and a `<h1>` for the game outcome.

### **index.js**:
- Implements the random dice roll logic.
- Updates the dice images and the winner text dynamically.

### **styles.css**:
- (Optional if provided): Defines the visual layout and enhances the design of the dice game.

---

## **Example Output**
- **Player 1 Wins**:
  ```plaintext
  Player 1 rolls a 5, Player 2 rolls a 3:
  "Player 1 Wins!🚩"
  ```
- **Draw**:
  ```plaintext
  Player 1 rolls a 4, Player 2 rolls a 4:
  "Draw!"
  ```

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License, allowing you to modify and distribute the project with proper attribution.

---

## **Acknowledgments**
- Inspired by the need to create a fun and lightweight browser game.
- Thanks to the power of HTML, CSS, and JavaScript for bringing this project to life.
