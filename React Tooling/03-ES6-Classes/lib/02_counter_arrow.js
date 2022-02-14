class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.text = text;
  }

  occurrences(word) {
    // TODO: return the number of occurrences
    const splited = this.text.split(" ");
    let sum = 0;
    splited.map((e) => {
      if (e.toLowerCase().match(`^${word.toLowerCase()}$`)) {
        sum += 1;
        return 'done';
      }
      sum += 0;
      return 'done';
    });
    return sum;
  }
}

module.exports = Counter;
