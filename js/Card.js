/**
 * Module for generating a playcard.
 * @module src/Card
 * @author Samuel Meijer
 * @version 1.1.1
 */
"use strict";

/**
 * Returns the value of the card based on the name of the card.
 * @param {String} name - The name of the card.
 * @returns {Number} - The value of the card.
 */
function valueFromName(name) {
  if (name === "J") {
    return 11;
  } else if (name === "Q") {
    return 12;
  } else if (name === "K") {
    return 13;
  } else if (name === "A") {
    return 1;
  } else {
    // Converting the string stored in name into a decimal number.
    return parseInt(name, 10);
  }
}

/**
 * Creates a Card instance that represents a playcard.
 * @param {String} nameInput - The name of the card.
 * @param {String} suitInput - The suit of the card.
 * @throws {TypeError} - Throws a TypeError if the argument passed to 'name' is not a string.
 * @throws {TypeError} - Throws a TypeError if the argument passed to 'suit' is not a string.
 * @returns {{name: String, suit: String, value: Number} | null} - The Card object or null if an error occurred.
 */
function Card(nameInput, suitInput) {
  // Evaluating any errors with the arguments passed to the parameters.
  try {
    if (typeof nameInput !== "string") {
      throw new TypeError(
        'The argument passed to "nameInput" must be a string.'
      );
    }
    if (typeof suitInput !== "string") {
      throw new TypeError(
        'The argument passed to "suitInput" must be a string.'
      );
    }
  } catch (error) {
    console.error(error.message);
    // Returning to stop the rest of the code from executing.
    return null;
  }

  return {
    name: nameInput,
    suit: suitInput,
    value: valueFromName(nameInput),
  };
}

export { Card };
