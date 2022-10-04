/**
 * Module for the cardgame 21.
 * @module src/Game
 * @author Samuel Meijer
 * @version 1.1.1
 */

"use strict";

import { CardDeck } from "./CardDeck.js";

/**
 * Creates an instance of cardgame 21.
 * @constructor
 */
function Game() {
  this.cardDeck = new CardDeck();
  this.thrownCards = [];
  // TODO: Add players and dealer
  this.players = null;
  this.dealer = null;

  // Adding a 'getter'-function to return 'this.cardDeck.deck' when 'Game.availableCards' is look up.
  // Also useful when working with 'this.availableCards' since it referes to the array containing cards directly.
  Object.defineProperty(Game.prototype, "availableCards", {
    get: function () {
      return this.cardDeck.deck;
    },
    set: function () {
      // Adding a TypeError if the user tries to change the value of 'Game.availableCards'.
      try {
        throw new TypeError(
          "You can not change the value of Game.availableCards"
        );
      } catch (error) {
        console.error(error.message);
      }
    },
  });
}

/**
 * Shuffling the deck of cards with a Fisher-Yates shuffle method.
 *  @method shuffleDeck
 *  @memberof Game
 */
Game.prototype.shuffleDeck = function () {
  this.cardDeck.shuffle();
};

export { Game };
