//Task A

console.log("Task: A");

const hoursInADay = 24;
const minutesInAnHour = 60;
const secondsInAMinute = 60;
const waterJuiceRatio = 2; 
const daysUntilBirthday = 187; 
const millimetersOfRain = 10; 

//Task B

console.log("Task: B");

const daysInAYear = 365;
const secondsIn25Hours = hoursInADay * 2.5 * minutesInAnHour * secondsInAMinute;
const minutesIn123Days = daysInAYear * 123 * minutesInAnHour;

console.log("Seconds in 2.5 hours:", secondsIn25Hours);
console.log("Minutes in 123 days:", minutesIn123Days);

//Task C

console.log("Task: C");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task D

console.log("Task: D");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Task E

console.log("Task: E");

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

//Task F

console.log("Task: F");

let i = 0;
while (i <= 100) {
  console.log(i);
  i++;
}

//Task G

console.log("Task: G");

const DICTIONARY_ML = {
  no: {
    hello: "Hello there",
    howAreYou: "How are you doing?"
  },
  en: {
    hello: "Hi",
    howAreYou: "How are you?",
    goodQuestionsLatly: "Gotten any good questions lately?"
  }
};

console.log(`${DICTIONARY_ML.en.hello} Christian ${DICTIONARY_ML.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY_ML.en.goodQuestionsLatly}`); //-> Gotten any good questions lately?
