const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {

  let newArray
  const splitSentence = tutorials.map(tutorial => tutorial.split(' '))

  newArray = splitSentence.map(function(words) {
    return words.map(function(word) {
       return (word.charAt(0).toUpperCase() + word.slice(1));
    })
  });

  return convertSentence(newArray);

}

function convertSentence (sentenceArray) {


  let newSentence = sentenceArray.map(function(sentence) {
       return sentence.join(' ')
  });

  return newSentence;

}






