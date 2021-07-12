const quotes = [
  "But I am I. And I won't subordinate my taste to the unanimous judgment of mankind.",
  "He was a man without a past, whose future was the imminent grave and whose present was a bitter fever of living.",
  "Every book was a peep-hole into the realm of knowledge. His hunger fed upon what he read, and increased.",
  "Let beauty be your end. Why should you mint beauty into gold? Anyway, you can’t;",
  "Life that did not yearn toward life was in fair way toward ceasing.",
  "Beauty is the only master to serve.",
  "I was not made for the desk and counting-house, for petty business squabbling, and legal jangling.",
  "It is not in what you succeed in doing that you get your joy, but in the doing of it. "
];

let words = [];
let wordIndex = [];
let startTime = Date.now();
// page elements
const quoteElement = document.querySelector(".quote");
const messageElement = document.querySelector(".message");
const typedValueElement = document.querySelector(".typed-value");
