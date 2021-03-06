"use strict";

/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce = typeof __webpack_nonce__ !== "undefined" ? __webpack_nonce__ : null;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;