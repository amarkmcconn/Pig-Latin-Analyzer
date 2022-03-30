function NotAVowel(letter){
   if (letter !== "a" && letter !==  "e" && letter !==  "i" && letter !==  "o" && letter !==  "u" && letter !== "q"){
    return true
   }else {
    return false
   }
}


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
}

function consonantsManipulator(text) {
  const wordArray = text.split(" ")
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
      const finalWord = letterMover + "ay"
      console.log(finalWord)
    } else {
      
    }
  })
}

