/**
 * Module for generating a deck of playcards.
 * @module src/CardDeck
 * @author Samuel Meijer
 * @version 1.1.1
 */

"use strict";

// Importing the Card module.
import { Card } from "./Card.js";

/**
 * Creates a CardDeck instance that represents a card deck.
 * @constructor
 */
function CardDeck() {
  this.deck = populateDeck();
}

/**
 * Populating an array with instances of 'Card' that represents a playcard.
 * @returns {Object[]} - An array populated with Card-objects.
 */
const populateDeck = function () {
  const output = [];

  // All of the possible card suits.
  const cardSuits = ["♥", "♠", "♦", "♣"];

  // Iterating through all of the possible cardSuits and generating a full set of cards.
  cardSuits.forEach((cardSuit) => {
    for (let i = 1; i <= 13; i++) {
      let cardName;

      switch (i) {
        case 1:
          cardName = "A";
          break;
        case 11:
          cardName = "J";
          break;
        case 12:
          cardName = "Q";
          break;
        case 13:
          cardName = "K";
          break;
        default:
          cardName = i.toString();
      }

      // Initiates an instance of 'Card' with the current cardSuit and cardName.
      const newCard = Card(cardName, cardSuit);
      // Adding the card to the array refered to by 'output'.
      output.push(newCard);
    }
  });

  // Returning the array refered to by 'output'
  return output;
};

/**
 * Drawing the last card from the deck.
 * @method
 * @returns {Object} - The card that is drawn from the deck.
 * @throws {Error} - Will throw an error if the deck is empty.
 */
CardDeck.prototype.drawCard = function () {
  // TODO: Errorhandling - Empty deck

  // Removing the last element(card) in the carddeck and returning it.
  let drawnCard = this.deck.pop();
  return drawnCard;
};

export { CardDeck };
