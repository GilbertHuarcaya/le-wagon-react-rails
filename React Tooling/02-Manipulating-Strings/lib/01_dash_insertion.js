function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const splited = word.split('');
  const dashed = splited.map((e, index) => {
    if (e.match(/[aeiou]/gi)) {
      return e;
    }
    if (e.match(/[^aeiou]/gi) && e !== " ") {
      if (splited[index + 1]) {
        if (splited[index + 1].match(/[^aeiou]/gi)) {
          return `${e}-`;
        }
        return e;
      }
      return e;
    }
    return e;
  });
  return dashed.join('');
}

module.exports = insertDash;
