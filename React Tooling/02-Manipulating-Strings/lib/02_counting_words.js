function occurrences(text, word) {
  const splited = text.split(" ");
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

module.exports = occurrences;
