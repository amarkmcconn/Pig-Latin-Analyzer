// UI Logic

function NotAVowel(letter){
   if (letter !== "a" && letter !==  "e" && letter !==  "i" && letter !==  "o" && letter !==  "u" && letter !== "q"){
    return true
   }else {
    return false
   }
}

// Business Logic

function vowelManipulator(text) {
  const wordArray = text.split(" ")
  let finalSentence = [];
  wordArray.forEach((word)=>{
    const firstLetter = word.charAt(0).toLowerCase();
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
      const wayWord = word + "way"
      finalSentence.push(wayWord) 
    }else {
      finalSentence.push(word)
    }
  })
  const sentenceString = finalSentence.join(" ");
  return sentenceString;
  console.log(sentenceString)
}

function consonantsManipulator(text) {
  const wordArray = text.split(" ")
  let finalSentence = [];
  wordArray.forEach((word)=>{
    const firstLetter = word.charAt(0).toLowerCase();
    if (NotAVowel(firstLetter)) {
      let consonantLength = 1;
      for (let i = 1; i < word.length; i++) {
        const letter = word.charAt(i).toLowerCase();
        if (NotAVowel(letter)){
          consonantLength++;
        }else {
          break;
        }
      }
      const wordPair = [word.substring(0, consonantLength) , word.substring(consonantLength)];
      wordPair.reverse();
      const letterMover = wordPair.join("");
      const finalWord = letterMover + "ay";
      finalSentence.push(finalWord);
    } else {
      finalSentence.push(word);
    }
  })
  const sentenceString = finalSentence.join(" ");
  return sentenceString;
  console.log(sentenceString)
}

function quManipulator(text) {
  const wordArray = text.split(" ")
  let finalSentence = [];
  wordArray.forEach((word)=>{
    const firstLetter = word.charAt(0).toLowerCase()
    if (firstLetter === "q") {
      const secondLetter = word.charAt(1).toLowerCase();
      if(secondLetter === "u"){
        const wordPair = [word.substring(0, 2) , word.substring(2)];
        wordPair.reverse();
        const letterMover = wordPair.join("");
        const finalWord = letterMover + "ay";
        finalSentence.push(finalWord);
      }else {
        const newWord = consonantsManipulator(word);
        finalSentence.push(newWord);
      }
    }else {
      finalSentence.push(word);
    }
  })
  const sentenceString = finalSentence.join(" ");
  return sentenceString;
  console.log(sentenceString)
}

// UI Logic

$(document).ready(function() {
  $("#form").submit((event) => {
    event.preventDefault();
    const text = $("#sentence-input").val();
    console.log(text);
    const vowelString = vowelManipulator(text);
    const constantString = consonantsManipulator(vowelString);
    const quString = quManipulator(constantString);
    $("#output").text(quString)
  }) 
})
  


