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

Describle:  vowelManipulator();

Test: "It recognizes a single vowel."
Code: vowelManipulator("a");
Expected Output: True

Test: "It recognizes if a single word starts with a vowel ."
Code: vowelManipulator("apple");
Expected Output: True

Test: "It recognizes if a single word starts with a vowel regardless of capitalization."
Code: vowelManipulator("APPLE");
Expected Output: True

Test: "It recognizes if a single word starts with a vowel regardless of punctuation."
Code: vowelManipulator("apple.");
Expected Output: True

Test: "It recognizes multiple words that start with a vowel."
Code: vowelManipulator("I am the apple");
Expected Output: I, am, apple

Test: "It recognizes if a single word starts with a vowel and add 'way' to the end of the word."
Code: vowelManipulator("apple");
Expected Output: appleway

Test: "It recognizes multiple words that start with a vowel and add 'way' to the end of those words."
Code: vowelManipulator("I am the apple");
Expected Output: Iway, amway, appleway

Test: "return the whole sentence with the editied words."
Code: vowelManipulator("I am the apple");
Expected Output: Iway amway the appleway


* Consonants function

Describle:  consonantsManipulator();

Test: "It recognizes a single consonant"
Code: consonantsManipulator("c");
Expected Output: True

Test: "It recognizes a single word starts with a consonant"
Code: consonantsManipulator("car");
Expected Output: True

Test: "It recognizes a single word starts with a consonant regardless of capitalization"
Code: consonantsManipulator("CAR");
Expected Output: True

Test: "It recognizes a single word starts with a consonant regardless of punctuation"
Code: consonantsManipulator("car.");
Expected Output: True

Test: "It recognizes multiple words that start with a consonant"
Code: consonantsManipulator("I love cars");
Expected Output: love, cars

Test: "It recognizes single word that start with a consonant & move the consonant to the end"
Code: consonantsManipulator("cars");
Expected Output: arsc

Test: "It recognizes single word that start with a consonant & move the consonant to the end & add "ay""
Code: consonantsManipulator("cars");
Expected Output: arscay

Test: "It recognizes multiple words that start with a consonant & move the consonant to the end"
Code: consonantsManipulator("I love cars");
Expected Output: ovel, arsc

Test: "It recognizes multiple words that start with a consonant & move the consonant to the end & add "ay""
Code: consonantsManipulator("I love cars");
Expected Output: ovelay, arscay

Test: "return the whole sentence with the editied words."
Code: consonantsManipulator("I love cars");
Expected Output: I ovelay arscay

* Qu function

Describle:  quManipulator();

Test: "It recognizes qu consonant."
Code: consonantsManipulator("qu");
Expected Output: True

Test: "It recognizes a single word starts with a qu"
Code: consonantsManipulator("quick");
Expected Output: True

Test: "It recognizes a single word starts with qu regardless of capitalization"
Code: consonantsManipulator("QUICK");
Expected Output: True

Test: "It recognizes a single word starts with qu regardless of punctuation"
Code: consonantsManipulator("quick,");
Expected Output: True

Test: "It recognizes multiple words that start with a qu"
Code: consonantsManipulator("a quick quiet quack");
Expected Output: quick, quiet, quack

Test: "It recognizes single word that start with qu & move the qu to the end"
Code: consonantsManipulator("quick");
Expected Output: ickqu

Test: "It recognizes multiple words that start with a qu & move the qu to the end"
Code: consonantsManipulator("a quick quiet quack");
Expected Output: ickqu, ietqu, ackqu

Test: "It recognizes multiple words that start with a au & move the au to the end & add "ay""
Code: consonantsManipulator("a quick quiet quack");
Expected Output: ickquay, ietquay, ackquay

Test: "return the whole sentence with the editied words."
Code: consonantsManipulator("a quick quiet quack");
Expected Output: a ickquay ietquay ackquay.

```