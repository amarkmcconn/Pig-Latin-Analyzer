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
  if (text !== "a" && text !==  "e" && text !==  "i" && text !==  "o" && text !==  "u" && text !== "q") {
    return true
  } else {
    return false
  }
}