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

function Card(nameInput, suitInput) {
  // TODO: Errorhandling

  return {
    name: nameInput,
    suit: suitInput,
    value: valueFromName(nameInput),
  };
}

export { Card };
