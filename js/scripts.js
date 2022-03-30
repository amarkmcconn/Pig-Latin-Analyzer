function vowelManipulator(text) {
  const wordArray = text.split(" ")
  console.log(wordArray)
  wordArray.forEach((word)=>{
    const firstLetter = word.charAt(0).toLowerCase();
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
      const wayWord = word + "way"
      console.log(wayWord)  
    } else {

    }
  })
}
  