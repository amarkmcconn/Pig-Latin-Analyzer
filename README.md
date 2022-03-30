```javascript
# Warm Up
Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7


# Specs
* Vowel function
1. recognize a single vowel 
Input: a Ouput: True
2. recognize if a single word starts with a vowel 
Input: apple  Ouput: True
3. recognize if a single word starts with a vowel regardless of capitalization
Input: APPLE Ouput: True
4. recognize if a single word starts with a vowel regardless of punctuation
Input: apple. Ouput: True
5. recognize multiple words that start with a vowel
Input: I am the apple Ouput: I, am, apple
6. recognize if a single word starts with a vowel and add 'way' to the end of the word
Input: apple Ouput: appleway
7. recognize multiple words that start with a vowel and add 'way' to the end of those words
Input: I am the apple Ouput: Iway, amway, appleway
8. return the whole sentence with the editied words.
Input: I am the apple Ouput: Iway amway the appleway

* Consonants function
1. recognize a single consonant
Input: c Output: True
2. recognize a single word starts with a consonant
Input: car Output: True
3. recognize a single word starts with a consonant regardless of capitalization
Input: CAR Output: True
4. recognize a single word starts with a consonant regardless of punctuation
Input: car. Output: True
5. recognize multiple words that start with a consonant
Input: I love cars Output: love, cars
6. recognize single word that start with a consonant & move the consonant to the end
Input: cars Output: arsc
7. recognize single word that start with a consonant & move the consonant to the end & add "ay"
Input: cars Output: arscay
8. recognize multiple words that start with a consonant & move the consonant to the end
Input: I love cars Ouput: ovel, arsc
9. recognize multiple words that start with a consonant & move the consonant to the end & add "ay"
Input: I love cars Ouput: ovelay, arscay
10. return the whole sentence with the editied words.
Input: I love cars Ouput: I ovelay arscay.

* Qu function
1. recognize qu consonant
Input: qu Output: True
2. recognize a single word starts with a qu
Input: quick Output: True
3. recognize a single word starts with qu regardless of capitalization
Input: QUICK Output: True
4. recognize a single word starts with qu regardless of punctuation
Input: quick, Output: True
5. recognize multiple words that start with a qu
Input: a quick quiet quack Output: quick, quiet, quack
6. recognize single word that start with qu & move the qu to the end
Input: quick Output: ickqu
7. recognize multiple words that start with a qu & move the qu to the end
Input: a quick quiet quack Output: ickqu, ietqu, ackqu
8. recognize multiple words that start with a au & move the au to the end & add "ay"
Input: a quick quiet quack Output: ickquay, ietquay, ackquay
9. return the whole sentence with the editied words.
Input: a quick quiet quack Ouput: a ickquay ietquay ackquay.
```