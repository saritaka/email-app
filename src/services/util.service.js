export const utilService = {
  makeId,
  saveToStorage,
  loadFromStorage,
  makeLorem,

  randomDate,
};

function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function saveToStorage(key, value) {
  localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key, defaultValue = null) {
  var value = localStorage[key] || defaultValue;
  return JSON.parse(value);
}

function makeLorem(wordCount = 100) {
  const words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  var txt = "";
  while (wordCount > 0) {
    wordCount--;
    txt += words[Math.floor(Math.random() * words.length)] + " ";
  }
  // console.log("txt", txt);
  return txt;
}

function randomDate(start, end) {
  var date = new Date(+start + Math.random() * (end - start));
  //   var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  //   date.setHours(hour);
  // console.log("date", date);
  return date;
}
