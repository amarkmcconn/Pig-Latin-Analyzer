function vowelManipulator(text) {
  const firstLetter = text.charAt(0).toLowerCase();
  console.log(firstLetter)
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true
  } else
    return false
}
  