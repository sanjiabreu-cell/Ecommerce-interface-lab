// Lab 4: JavaScript Fundamentals

function checkVariable(input) {
  switch (typeof input) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'bigint':
      return 'bigint';
    case 'undefined':
      return 'undefined';
    case 'object':
      return 'object';
    default:
      return typeof input;
  }
}

function generateIDs(count) {
  const ids = [];
  for (let i = 0; i < count; i++) {
    if (i === 5) {
      continue;
    }
    ids.push(`ID-${i}`);
  }
  return ids;
}

function calculateTotal(...numbers) {
  if (!numbers.every((value) => typeof value === 'number')) {
    throw new TypeError('Invalid input: All arguments must be numbers');
  }

  return numbers.reduce((sum, value) => sum + value, 0);
}

function getTopScorers(playerList) {
  return playerList
    .filter((player) => player.score > 8)
    .map((player) => player.name)
    .join(', ');
}

class Item {
  #discount = 0.1;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get finalPrice() {
    return this.price - this.price * this.#discount;
  }
}

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    return error.message;
  } finally {
    console.log('Operation attempted');
  }
}

// Example usage for quick testing in Node only:
if (typeof window === 'undefined' && typeof require !== 'undefined' && require.main === module) {
  console.log('checkVariable("hello"):', checkVariable('hello'));
  console.log('checkVariable(null):', checkVariable(null));
  console.log('generateIDs(7):', generateIDs(7));
  console.log('calculateTotal(1, 2, 3):', calculateTotal(1, 2, 3));
  console.log(
    'getTopScorers:',
    getTopScorers([
      { name: 'Alice', score: 10 },
      { name: 'Bob', score: 5 },
      { name: 'Cara', score: 9 },
    ])
  );
  const item = new Item('Widget', 100);
  console.log('Item finalPrice:', item.finalPrice);
  console.log('safeDivide(10, 2):', safeDivide(10, 2));
  console.log('safeDivide(10, 0):', safeDivide(10, 0));
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    checkVariable,
    generateIDs,
    calculateTotal,
    getTopScorers,
    Item,
    safeDivide,
  };
}

// Expose in browser as `Lab` namespace
if (typeof window !== 'undefined') {
  window.Lab = {
    checkVariable,
    generateIDs,
    calculateTotal,
    getTopScorers,
    Item,
    safeDivide,
  };
}
