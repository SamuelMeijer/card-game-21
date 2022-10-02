/**
 * Starting point of the application.
 * @author Samuel Meijer
 * @version 1.1.1
 */
"use strict";

// Importing the Card module.
import { Card } from "./Card.js";
import { CardDeck } from "./CardDeck.js";

const startGameBtn = document.querySelector("#startGameBtn");

startGameBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // TODO: Add functionality

  console.log("Start a game of 21");
  // Testing Card
  console.log(CardDeck());
});
